// src/app/api/posts/[id]/route.ts
import prisma from '@/app/lib/prisma'; // Supondo que o Prisma esteja configurado corretamente

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const deletedPost = await prisma.pet.delete({
      where: {
        id: parseInt(id), // Converte o ID para um número
      },
    });

    return new Response(JSON.stringify(deletedPost), { status: 200 });
  } catch (error) {
    console.error("Erro ao excluir o post:", error);
    return new Response(JSON.stringify({ error: "Erro ao excluir o post." }), { status: 500 });
  }
}
