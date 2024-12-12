// app/api/pets/route.ts (caso utilize a pasta `app`)
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Importação do Prisma configurado

export async function GET() {
  try {
    const pets = await prisma.pet.findMany(); // Buscando pets no banco
    return NextResponse.json(pets); // Retorna os pets como JSON
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao buscar pets" }, { status: 500 });
  }
}
