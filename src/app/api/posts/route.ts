import { NextResponse } from "next/server";
import prisma from '@/app/lib/prisma'; // Certifique-se de que este caminho está correto

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Corpo da requisição recebido:", body); // Log para depuração

    if (!body.name || !body.ageCategory || !body.size || !body.description || !body.photoUrl) {
      return NextResponse.json({ error: "Todos os campos são obrigatórios." }, { status: 400 });
    }

    const post = await prisma.pet.create({
      data: {
        name: body.name,
        ageCategory: body.ageCategory,
        size: body.size,
        description: body.description,
        photoUrl: body.photoUrl,
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar o post:", error);
    return NextResponse.json({ error: "Erro ao criar o post." }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Buscando todos os pets no banco de dados
    const pets = await prisma.pet.findMany(); 
    return NextResponse.json(pets, { status: 200 });
  } catch (error) {
    console.error('Erro ao buscar os pets:', error);
    return NextResponse.json({ error: 'Erro ao buscar os pets.' }, { status: 500 });
  }
}