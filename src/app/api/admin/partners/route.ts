import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth/roles";
import {
  createPartner,
  getAllPartners,
} from "@/lib/partners/repository";
import type { Partner } from "@/lib/partners/types";

async function guardAdmin() {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }
  return null;
}

export async function GET() {
  const denied = await guardAdmin();
  if (denied) return denied;
  return NextResponse.json({ partners: getAllPartners() });
}

export async function POST(request: Request) {
  const denied = await guardAdmin();
  if (denied) return denied;

  const body = (await request.json()) as Partial<Partner>;
  if (!body.name?.trim()) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  try {
    const partner = createPartner({
      name: body.name.trim(),
      logoUrl: body.logoUrl?.trim() ?? "",
      websiteUrl: body.websiteUrl?.trim() ?? "",
      description: body.description?.trim(),
      category: body.category?.trim(),
      order: body.order ?? getAllPartners().length + 1,
      isActive: body.isActive ?? true,
      id: body.id,
    });
    revalidatePath("/");
    return NextResponse.json({ partner }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Create failed" },
      { status: 400 }
    );
  }
}
