import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth/roles";
import {
  deletePartner,
  getPartnerById,
  updatePartner,
} from "@/lib/partners/repository";
import type { Partner } from "@/lib/partners/types";

type RouteContext = { params: Promise<{ id: string }> };

async function guardAdmin() {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }
  return null;
}

export async function PATCH(request: Request, context: RouteContext) {
  const denied = await guardAdmin();
  if (denied) return denied;

  const { id } = await context.params;
  const body = (await request.json()) as Partial<Partner>;

  const updated = updatePartner(id, {
    name: body.name?.trim(),
    logoUrl: body.logoUrl?.trim(),
    websiteUrl: body.websiteUrl?.trim(),
    description: body.description?.trim(),
    category: body.category?.trim(),
    order: body.order,
    isActive: body.isActive,
  });

  if (!updated) {
    return NextResponse.json({ error: "Partner not found" }, { status: 404 });
  }

  revalidatePath("/");
  return NextResponse.json({ partner: updated });
}

export async function DELETE(_request: Request, context: RouteContext) {
  const denied = await guardAdmin();
  if (denied) return denied;

  const { id } = await context.params;
  if (!getPartnerById(id)) {
    return NextResponse.json({ error: "Partner not found" }, { status: 404 });
  }

  deletePartner(id);
  revalidatePath("/");
  return NextResponse.json({ ok: true });
}
