import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

const allowedAdmins = ["admin@email.com", "outroadmin@email.com"]; // Lista de e-mails permitidos

export async function middleware(req: NextRequest) {
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  const userEmail = session.user.email;

  if (!allowedAdmins.includes(userEmail)) {
    return NextResponse.redirect(new URL("/admin/unauthorized", req.url)); // Página de erro
  }

  return NextResponse.next();
}

// Protege todas as rotas dentro de /admin/
export const config = {
  matcher: ["/admin/:path*"],
};
