import React from "react";
import PetCard from "./PetCard"; // Componente do card individual
import { Grid } from "@mui/material";

const pets = [
  { name: "Bob", gender: "Macho", age: "Adulto", size: "Médio Porte", location: "Jaguariúna, SP", img: "https://midias.correiobraziliense.com.br/_midias/jpg/2024/03/29/675x450/1_golden_retriever-35867546.jpg?20240329205330?20240329205330" },
  { name: "Cat Lavine", gender: "Fêmea", age: "Adulto", size: "Médio Porte", location: "Amparo, SP", img: "https://fisiocarepet.com.br/wp-content/uploads/2021/12/pastor-1.jpg" },
  { name: "Bob", gender: "Macho", age: "Adulto", size: "Médio Porte", location: "Jaguariúna, SP", img: "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg" },
  { name: "Cat Lavine", gender: "Fêmea", age: "Adulto", size: "Médio Porte", location: "Amparo, SP", img: "https://ufape.com.br/wp-content/uploads/2023/12/Ufape-Hospital-Veterinario-cachorro-cansado-GS2-MKT-Freepik.jpg" },
  { name: "Bob", gender: "Macho", age: "Adulto", size: "Médio Porte", location: "Jaguariúna, SP", img: "https://media.istockphoto.com/id/1364223795/pt/foto/studio-shot-of-american-staffordshire-terrier-running-isolated-over-white-background-concept.jpg?s=612x612&w=0&k=20&c=o9V5tPGDQbCgXwrBRAdRDSD7orazTLqGe7nnIyHvxsU=" },
  { name: "Cat Lavine", gender: "Fêmea", age: "Adulto", size: "Médio Porte", location: "Amparo, SP", img: "https://static.vecteezy.com/ti/fotos-gratis/t2/28705608-fofa-cachorro-com-patas-sobre-branco-placa-catahoula-laboratorio-misturar-cachorro-ai-gerado-foto.jpg" },
 
  // Outros pets...
];

export default function PetGrid() {
  return (
    <Grid container spacing={4} justifyContent="center">
      {pets.map((pet, index) => (
          <Grid
          item
          xs={12} // 1 coluna em telas pequenas
          sm={6} // 2 colunas em telas médias
          md={4} // 3 colunas em telas grandes
          lg={4} // 4 colunas em telas muito grandes
          key={index}
        >
          <PetCard pet={pet} status={undefined} />
        </Grid>
      ))}
    </Grid>
  );
}