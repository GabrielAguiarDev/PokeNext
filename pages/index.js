import Image from "next/image";

import React, { useState } from "react";

import styles from "../styles/Home.module.css";

import Card from "../components/Card";
import Link from "next/link";

export async function getStaticProps() {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  // add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }) {
  const [search, setSearch] = useState("");
 
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Poke<span>Next</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="PokeNext"
        />
      </div>
      <div className={styles.search}>
        <input
          type="number"
          placeholder="ID"
          onInput={(e) => e.target.value = e.target.value.slice(0, 3)}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <Link href={`/pokemon/${search}`}>Buscar</Link>
        <span>* Busque pelo id do pokemon</span>
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
