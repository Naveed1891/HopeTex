import { NextResponse } from "next/server";
import { ROLE_COOKIE, resolveRoleFromEmail, type UserRole } from "@/lib/auth/roles";

export async function POST(request: Request) {
  const body = (await request.json()) as { email?: string; role?: UserRole };
  const role =
    body.role === "admin" || body.role === "client"
      ? body.role
      : body.email
        ? resolveRoleFromEmail(body.email)
        : "client";

  const response = NextResponse.json({ role });
  response.cookies.set(ROLE_COOKIE, role, {
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
    sameSite: "lax",
    httpOnly: true,
  });
  return response;
}
