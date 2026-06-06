import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth/roles";
import { reorderPartners } from "@/lib/partners/repository";

export async function POST(request: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const body = (await request.json()) as { orderedIds?: string[] };
  if (!body.orderedIds?.length) {
    return NextResponse.json({ error: "orderedIds required" }, { status: 400 });
  }

  const partners = reorderPartners(body.orderedIds);
  revalidatePath("/");
  return NextResponse.json({ partners });
}
