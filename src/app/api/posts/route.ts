import { NextResponse } from "next/server";

export async function GET() {
  const posts = [
    { id: 1, title: "Post 1", body: "Conteúdo do Post 1" },
    { id: 2, title: "Post 2", body: "Conteúdo do Post 2" },
  ];
  return NextResponse.json(posts);
}
