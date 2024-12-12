import React from "react";
import PetCard from "./PetCard"; // Componente do card individual
import { Grid } from "@mui/material";

const petsAdotados = [
  { name: "Bob", gender: "Macho", age: "Adulto", size: "Médio Porte", location: "Jaguariúna, SP", isAdopted: true, img: "https://midias.correiobraziliense.com.br/_midias/jpg/2024/03/29/675x450/1_golden_retriever-35867546.jpg?20240329205330?20240329205330" },
  { name: "Cat Lavine", gender: "Fêmea", age: "Adulto", size: "Médio Porte", location: "Amparo, SP", isAdopted: true, img: "https://fisiocarepet.com.br/wp-content/uploads/2021/12/pastor-1.jpg" },
  { name: "Bob", gender: "Macho", age: "Adulto", size: "Médio Porte", location: "Jaguariúna, SP", isAdopted: true, img: "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg" },
  { name: "Cat Lavine", gender: "Fêmea", age: "Adulto", size: "Médio Porte", location: "Amparo, SP", isAdopted: true, img: "https://ufape.com.br/wp-content/uploads/2023/12/Ufape-Hospital-Veterinario-cachorro-cansado-GS2-MKT-Freepik.jpg" },

 
  // Outros pets...
];

export default function PetsAdotados() {
  return (
    <Grid container spacing={4} justifyContent="center">
      {petsAdotados.map((pet, index) => (
          <Grid
          item
          xs={12} // 1 coluna em telas pequenas
          sm={6} // 2 colunas em telas médias
          md={4} // 3 colunas em telas grandes
          lg={4} // 4 colunas em telas muito grandes
          key={index}
        >
           <PetCard 
            pet={pet} 
            status={pet.isAdopted ? "adotado" : "disponivel"} 
          />
        </Grid>
      ))}
    </Grid>
  );
}