import React from "react";
import pokeballImage from "../../images/pokeball.svg";
import pokeballColoredImage from "../../images/pokeball-color.svg";
import "./Pokeball.css";

const Pokeball = ({ isCaught, onToggleCatch }) => (
  <img
    className="pokeball"
    onClick={onToggleCatch}
    src={isCaught ? pokeballColoredImage : pokeballImage}
    alt={isCaught ? "Colored Pokeball" : "Pokeball silhouette"}
  />
);

export default Pokeball;
