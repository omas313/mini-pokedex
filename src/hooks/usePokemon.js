import { useEffect, useState } from "react";
import pokemonService from "../services/pokemonService";
import pokemonStorage from "../services/pokemonStorage";

export default function usePokemon(name) {
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

  return { pokemon: data, isCaught, handleToggleCatch };
}
