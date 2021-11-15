import React, { useEffect, useState } from "react";
import pokemonService from "../../services/pokemonService";
import Pokecard from "../Pokecard/Pokecard";

const Pokedex = () => {
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    const getAllPokemon = async () => {
      const pokemon = await pokemonService.getAll();
      setAllPokemon(pokemon.map(p => p.name));
    };

    getAllPokemon();
  }, []);

  if (allPokemon.length < 1) return null;

  return (
    <>
      <h1>Pokedex</h1>
      {allPokemon.map(pokemon => (
        <Pokecard key={pokemon} name={pokemon} />
      ))}
    </>
  );
};

export default Pokedex;
