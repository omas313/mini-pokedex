import React from "react";
import { Link } from "react-router-dom";
import Pokeball from "../Pokeball/Pokeball";
import usePokemon from "./../../hooks/usePokemon";
import capitalize from "./../../utils/capitalize";
import "./Pokecard.css";

const Pokecard = ({ name, style }) => {
  const { pokemon, isCaught, handleToggleCatch } = usePokemon(name);

  return (
    <>
      {pokemon && (
        <article style={style} className="pokecard-container">
          <div className="pokecard">
            <div className="pokecard__title">
              <Link to={`/pokemon/${name}`}>{capitalize(pokemon.name)}</Link>
            </div>
            <div className="pokecard__pokeball">
              <Pokeball isCaught={isCaught} onToggleCatch={handleToggleCatch} />
            </div>
            <div className="pokecard__image-container">
              <img
                src={pokemon.sprites.front_default}
                alt={`Front view of ${name}`}
              />
            </div>
          </div>
        </article>
      )}
    </>
  );
};

export default Pokecard;
