import { NextResponse } from "next/server";
import { getActivePartners } from "@/lib/partners/repository";

export async function GET() {
  return NextResponse.json({ partners: getActivePartners() });
}
