import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

// Lidar com o método POST
export async function POST(req: Request) {
  try {
    const { name, ageCategory, size, description, photoUrl } = await req.json();
    
    // Cria um novo post no banco de dados
    const newPost = await prisma.post.create({
      data: { name, ageCategory, size, description, photoUrl },
    });

    // Retorna o post criado com status 201
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao criar o post." }, { status: 500 });
  }
}
