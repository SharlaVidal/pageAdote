import React from "react";
import Button from "../app/components/Button";
import Carousel from "./components/Carousel";
import PetGrid from "./components/PetGrid";
import PorQueAdotar from "./components/PorQueAdotar";
import Colabore from "./components/Colabore";
import PetsAdotados from "./components/PetsAdotados";
import ApoiadoresCarousel from "./components/ApoiadoresCarousel";

export default async function HomePage() {
 


    return (
      <main>
        <Carousel />
        <Button />
       <section style={{ textAlign: "center", margin: "20px 0" }}>
        <h1>Pets recém chegados</h1>
      </section>
      <section style={{ textAlign: "center", margin: "10px 20px" }}> 
        <PetGrid /> 
        </section>
     
      <PorQueAdotar/>
      <Colabore />

      <PetsAdotados />
      <ApoiadoresCarousel />
        <p>Esta é a página inicial do projeto.</p>
      </main>
    );
  }