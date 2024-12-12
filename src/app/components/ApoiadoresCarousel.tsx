"use client"; // Diretiva para marcar este arquivo como componente do cliente

import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { ArrowForward, ArrowBack } from "@mui/icons-material";

const ApoiadoresCarousel = () => {
  const slides = [
    {
      id: 1,
      image: "/images/patrocinador.png",  // Caminho da imagem
      title: "Apoiador 1",
      description: "Descrição do Apoiador 1"
    },
    {
      id: 2,
      image: "/images/patrocinador.png", // Caminho da imagem
      title: "Apoiador 2",
      description: "Descrição do Apoiador 2"
    },
    {
      id: 3,
      image: "/images/patrocinador.png", // Caminho da imagem
      title: "Apoiador 3",
      description: "Descrição do Apoiador 3"
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 600, mx: "auto", position: "relative" , mt: 5}}>
      {/* Exibindo a imagem e os dados do slide */}
      <Box sx={{ position: "relative", textAlign: "center", mb: 2 }}>
        <img
          src={slides[index].image} // Imagem do slide
          alt={slides[index].title} // Título como alt para acessibilidade
          style={{ width: "50%", height: "auto", borderRadius: "8px" }}
        />
        <Typography variant="h6" sx={{ mt: 2 }}>
          {slides[index].title} {/* Título do Apoiador */}
        </Typography>
        <Typography variant="body2" sx={{ color: "gray" }}>
          {slides[index].description} {/* Descrição do Apoiador */}
        </Typography>
      </Box>

      {/* Botões de navegação */}
      <IconButton
        onClick={prevSlide}
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      >
        <ArrowBack />
      </IconButton>
      <IconButton
        onClick={nextSlide}
        sx={{
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      >
        <ArrowForward />
      </IconButton>
    </Box>
  );
};

export default ApoiadoresCarousel;
