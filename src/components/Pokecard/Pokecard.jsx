import React, { useEffect, useState } from "react";
import pokemonService from "../../services/pokemonService";
import "./Pokecard.css";

const Pokecard = ({ name }) => {
  const [data, setData] = useState(null);
  const [isCaught, setIsCaught] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function getPokemonData() {
      const pokemon = await pokemonService.get(name);

      if (!isMounted) return;

      setData(pokemon);
      // update isCaught based on local storage
    }

    getPokemonData();

    return () => (isMounted = false);
  }, [name]);

  const handleToggleCatch = () => {
    // update local storage
    setIsCaught(!isCaught);
  };

  return (
    <>
      {data && (
        <section className="pokecard">
          <div className="pokecard__title">{data.name}</div>
          <div className="pokecard__pokeball">
            <button onClick={handleToggleCatch}>
              {isCaught ? "release?" : "catch!"}
            </button>
          </div>
          <div className="pokecard__image-container">
            <img
              src={data.sprites.front_default}
              alt={`Front view of ${name}`}
            />
          </div>
        </section>
      )}
    </>
  );
};

export default Pokecard;
