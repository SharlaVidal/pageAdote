"use client";

import { useState, useEffect } from "react";
import PostsTable from "../../../app/components/PostsTable";
import UploadPhoto from "../../../app/components/UploadPhoto";
import { TextField, Button, MenuItem, Box } from "@mui/material";

type Post = {
  id: number;
  name: string;
  ageCategory: string;
  size: string;
  description: string;
};

export default function PostForm() {
  const [formData, setFormData] = useState({
    name: "",
    ageCategory: "",
    size: "",
    description: "",
    photoUrl: "",
  });

  const [posts, setPosts] = useState<Post[]>([]); // Definindo o estado para armazenar os posts

  // Função para buscar os posts da API
  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/posts");
      if (res.ok) {
        const data = await res.json();
        setPosts(data); // Atualiza o estado com os posts da API
      } else {
        alert("Erro ao carregar posts.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro ao conectar ao servidor.");
    }
  };

  // Função para enviar dados do formulário e criar um post
  const handleSubmit = async () => {
    if (!formData.name || !formData.ageCategory || !formData.size || !formData.description || !formData.photoUrl) {
      alert("Todos os campos são obrigatórios.");
      return;
    }
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Post criado com sucesso!");
        fetchPosts(); // Atualiza a lista de posts após criação
      } else {
        alert("Erro ao criar o post.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro ao conectar ao servidor.");
    }
  };

  // Função para excluir um post
  const handleDelete = async (id: number) => {
    if (window.confirm("Tem certeza que deseja excluir este post?")) {
      try {
        const res = await fetch(`/api/posts/${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          alert("Post excluído com sucesso!");
          fetchPosts(); // Atualiza a lista de posts após exclusão
        } else {
          alert("Erro ao excluir o post.");
        }
      } catch (error) {
        console.error("Erro na requisição:", error);
        alert("Erro ao conectar ao servidor.");
      }
    }
  };

  // Carregar posts na montagem do componente
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
      <TextField
        fullWidth
        label="Nome"
        name="name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        select
        label="Categoria de Idade"
        name="ageCategory"
        value={formData.ageCategory}
        onChange={(e) => setFormData({ ...formData, ageCategory: e.target.value })}
        sx={{ mb: 2 }}
      >
        <MenuItem value="Filhote">Filhote</MenuItem>
        <MenuItem value="Adulto">Adulto</MenuItem>
        <MenuItem value="Senior">Senior</MenuItem>
      </TextField>
      <TextField
        fullWidth
        select
        label="Porte"
        name="size"
        value={formData.size}
        onChange={(e) => setFormData({ ...formData, size: e.target.value })}
        sx={{ mb: 2 }}
      >
        <MenuItem value="Pequeno">Pequeno</MenuItem>
        <MenuItem value="Médio">Médio</MenuItem>
        <MenuItem value="Grande">Grande</MenuItem>
      </TextField>
      <TextField
        fullWidth
        label="Descrição"
        name="description"
        value={formData.description}
        multiline
        rows={4}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        sx={{ mb: 2 }}
      />
      <UploadPhoto
        onUpload={(url) => setFormData({ ...formData, photoUrl: url })}
      />
      <Button
        variant="contained"
        onClick={handleSubmit}
        disabled={!formData.photoUrl}
      >
        Criar Post
      </Button>

      <div>
        <h2>Posts</h2>
        <PostsTable posts={posts} onDelete={handleDelete} />
      </div>
    </Box>
  );
}

