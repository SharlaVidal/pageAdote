import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function PetCard({ pet, status }) {
  return (
    <Card
      sx={{
        borderRadius: "16px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        position: "relative",
        overflow: "hidden",
        maxWidth: "100%", // Limita a largura do card
      }}
    >
      {/* Badge baseado no status */}
      <Box
        sx={{
          position: "absolute",
          top: 5,
          left: 10,
          zIndex: 1,
        }}
      >
        <Chip
          label={status === "adotado" ? "Já adotado!" : "Disponível"}
          sx={{
            backgroundColor: status === "adotado" ? "#D32F2F" : "#6A1B9A",
            color: "#fff",
            fontWeight: "bold",
          }}
        />
      </Box>

      {/* Imagem do Pet */}
      <CardMedia
        component="img"
        image={pet.img}
        alt={pet.name}
        height="200px"
        sx={{
          width: "100%",
          objectFit: "cover",
        }}
      />

      {/* Conteúdo */}
      <CardContent
        sx={{
          textAlign: "center",
          padding: "16px",
        }}
      >
        {/* Nome */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            marginBottom: "8px",
          }}
        >
          {pet.name}
        </Typography>

        {/* Detalhes */}
        <Typography
          sx={{
            fontSize: "0.9rem",
            color: "#616161",
            marginBottom: "4px",
          }}
        >
          {pet.gender} • {pet.age} • {pet.size}
        </Typography>
        <Typography
          sx={{
            fontSize: "0.85rem",
            color: "#9e9e9e",
          }}
        >
          {pet.location}
        </Typography>
      </CardContent>

      {/* Ícone de Favoritar */}
      <IconButton
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          color: "#D32F2F",
        }}
      >
        <FavoriteBorderIcon />
      </IconButton>
    </Card>
  );
}
