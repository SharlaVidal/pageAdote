"use client";
import React from "react";
import Slider from "react-slick";
import { Button, Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const CarouselWithButtons = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Box sx={{ width: "100%", margin: "0 auto" , mt:'2em' , maxWidth: "100vw",  overflow: "hidden" }}>
      {/* Carrossel */}
      <Slider {...settings}>
        {/* Slide 1 */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ flex: 1 }}>
          <img
          src="/images/banner-pet.jpg"
          alt="Imagem 1"
          style={{
            width: "100%",  
            maxWidth: "100%",         // Faz a imagem ocupar toda a largura do contêiner
            height: "auto",        // Mantém a proporção da imagem
            borderRadius: "8px",   // Mantém o arredondamento dos cantos
            objectFit: "cover"     // Ajusta a imagem para cobrir todo o espaço disponível sem distorcer
          }}
        />
          </Box>
          <Box
            sx={{
              flex: 1,
              padding: 3,
              background: "#FFA726",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              borderRadius: "8px",
            }}
          >
  
          </Box>
        </Box>
  
        {/* Slide 2 */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ flex: 1 }}>
            <img
              src="/images/banner-pet-2.jpg" // Caminho da nova imagem
              alt="Imagem 2"
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              padding: 3,
              background: "#FFA726",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              borderRadius: "8px",
              
            }}
          >
          </Box>
        </Box>
      </Slider>
    </Box>
  );
  
};

export default CarouselWithButtons;
