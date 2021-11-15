import React from "react";
import Pokeball from "../Pokeball/Pokeball";
import usePokemon from "../../hooks/usePokemon";
import capitalize from "./../../utils/capitalize";
import "./PokemonDetails.css";

const PokemonDetails = ({ match }) => {
  const { pokemon, isCaught, handleToggleCatch } = usePokemon(
    match.params.name
  );

  if (!pokemon) return null;

  const renderTypes = () =>
    pokemon.types.map(t => (
      <li key={t.type.name}>{capitalize(t.type.name)}</li>
    ));
  const getTotalBaseStats = () =>
    pokemon.stats.reduce((total, current) => total + current.base_stat, 0);

  return (
    <article className="pokemon-details">
      <h1 className="pokemon-details__header">{capitalize(pokemon.name)}</h1>

      <img
        className="pokemon-details__image"
        src={pokemon.sprites.front_default}
        alt={`Front view of ${pokemon.name}`}
      />

      <section className="pokemon-details__pokeball">
        <Pokeball isCaught={isCaught} onToggleCatch={handleToggleCatch} />
      </section>

      <section className="pokemon-details__types">
        <h2>Type</h2>
        <ul className="list list--bulletless">{renderTypes()}</ul>
      </section>

      <section className="pokemon-details__measurements">
        <ul className="list list--bulletless">
          <li>
            <h2>Height</h2>
            {Number(pokemon.height) / 10} m
          </li>
          <li>
            <h2>Weight</h2>
            {Number(pokemon.weight) / 10} kg
          </li>
        </ul>
      </section>

      <section className="pokemon-details__base-stats">
        <h2>Base Stats</h2>
        <ul className="list list--bulletless">
          {pokemon.stats.map(s => (
            <li key={s.stat.name}>
              <h3>{capitalize(s.stat.name)}</h3>
              {s.base_stat}
            </li>
          ))}
          <li className="pokemon-details__base-stats-total">
            <h3>Total</h3>
            {getTotalBaseStats()}
          </li>
        </ul>
      </section>
    </article>
  );
};

export default PokemonDetails;
