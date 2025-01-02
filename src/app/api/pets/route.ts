import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, ageCategory, size, description, photoUrl } = req.body;
    try {
      const newPost = await prisma.post.create({
        data: { name, ageCategory, size, description, photoUrl },
      });
      res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar o post." });
    }
  } else {
    res.status(405).json({ error: "Método não permitido." });
  }
}
