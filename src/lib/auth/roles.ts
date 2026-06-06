import { cookies } from "next/headers";

export const ROLE_COOKIE = "hopetex-role";
export type UserRole = "admin" | "client";

export async function getUserRole(): Promise<UserRole | null> {
  const cookieStore = await cookies();
  const value = cookieStore.get(ROLE_COOKIE)?.value;
  if (value === "admin" || value === "client") return value;
  return null;
}

export async function isAdmin(): Promise<boolean> {
  return (await getUserRole()) === "admin";
}

export function resolveRoleFromEmail(email: string): UserRole {
  const normalized = email.trim().toLowerCase();
  const adminEmails = (process.env.NEXT_PUBLIC_ADMIN_EMAILS ?? "admin@hopetex.com")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);

  if (adminEmails.includes(normalized) || normalized.startsWith("admin@")) {
    return "admin";
  }
  return "client";
}
