import React from "react";
import Button from "../app/components/Button";
import Carousel from "./components/Carousel";
import PetGrid from "./components/PetGrid";
import PorQueAdotar from "./components/PorQueAdotar";
import Colabore from "./components/Colabore";
import PetsAdotados from "./components/PetsAdotados";
import ApoiadoresCarousel from "./components/ApoiadoresCarousel";

export default async function HomePage() {
  // Chamada para a API
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/posts`, {
    cache: "no-store", // Garante que os dados sejam atualizados a cada requisição
  });
  const posts = await res.json();

  return (
    <main>
      <Carousel />
      <Button />
      <section style={{ textAlign: "center", margin: "20px 0" }}>
        <h1>Pets recém chegados</h1>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {posts.map((post) => (
            <div
              key={post.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                margin: "10px",
                padding: "10px",
                textAlign: "center",
                width: "200px",
              }}
            >
              <img
                src={post.photoUrl}
                alt={post.name}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3>{post.name}</h3>
              <p>Idade: {post.ageCategory}</p>
              <p>Porte: {post.size}</p>
              <p>{post.description}</p>
            </div>
          ))}
        </div>
      </section>
      <PorQueAdotar />
      <Colabore />
      <PetsAdotados />
      <ApoiadoresCarousel />
      <p>Esta é a página inicial do projeto.</p>
    </main>
  );
}
