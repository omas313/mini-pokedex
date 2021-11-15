import React, { useEffect, useState } from "react";
import pokemonService from "../../services/pokemonService";
import "./Pokecard.css";
import pokeballImage from "../../images/pokeball.svg";
import pokeballColoredImage from "../../images/pokeball-color.svg";
import pokemonStorage from "../../services/pokemonStorage";

const Pokecard = ({ name, style }) => {
  const [data, setData] = useState(null);
  const [isCaught, setIsCaught] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function getPokemonData() {
      const pokemon = await pokemonService.get(name);

      if (!isMounted) return;

      setData(pokemon);
      setIsCaught(pokemonStorage.doesExist(pokemon.name));
    }

    getPokemonData();

    return () => (isMounted = false);
  }, [name]);

  const handleToggleCatch = () => {
    if (isCaught) pokemonStorage.remove(data.name);
    else pokemonStorage.add(data.name);

    setIsCaught(!isCaught);
  };

  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  return (
    <>
      {data && (
        <article style={style} className="pokecard-container">
          <div className="pokecard">
            <div className="pokecard__title">{capitalize(data.name)}</div>
            <div className="pokecard__pokeball">
              <img
                onClick={handleToggleCatch}
                src={isCaught ? pokeballColoredImage : pokeballImage}
                alt={isCaught ? "Colored Pokeball" : "Pokeball silhouette"}
              />
            </div>
            <div className="pokecard__image-container">
              <img
                src={data.sprites.front_default}
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
