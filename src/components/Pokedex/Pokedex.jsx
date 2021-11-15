import React, { useEffect, useState } from "react";
import pokemonService from "../../services/pokemonService";
import ScrollView from "../common/ScrollView/ScrollView";
import Pokecard from "../Pokecard/Pokecard";
import "./Pokedex.css";

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
    <section className="pokedex">
      <h1 className="pokedex__header">Pokedex</h1>
      <div className="pokedex__body">
        <ScrollView
          count={allPokemon.length}
          renderRow={({ index, ...rest }) => (
            <Pokecard name={allPokemon[index]} {...rest} />
          )}
        />
      </div>
    </section>
  );
};

export default Pokedex;
