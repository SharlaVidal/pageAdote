"use client" ;

import { useState } from "react";
import UploadPhoto from "../components/UploadPhoto";
import { TextField, Button, MenuItem, Box } from "@mui/material";

export default function PostForm() {
  const [formData, setFormData] = useState({
    name: "",
    ageCategory: "",
    size: "",
    description: "",
    photoUrl: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      alert("Post criado com sucesso!");
    }
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
      <TextField
        fullWidth
        label="Nome"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        select
        label="Categoria de Idade"
        name="ageCategory"
        value={formData.ageCategory}
        onChange={handleInputChange}
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
        onChange={handleInputChange}
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
        onChange={handleInputChange}
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
    </Box>
  );
}
