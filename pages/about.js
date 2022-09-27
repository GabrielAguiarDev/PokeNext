import Image from "next/image";

import styled from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styled.about}>
      <h1>Sobre o projeto</h1>
      <p>PokeNext é um projeto criado para consultar um pokémon. Foi utilizado a API PokéAPI</p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      />
    </div>
  );
}
