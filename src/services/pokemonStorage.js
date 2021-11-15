const pokedexKey = "pokedex";
const separator = ";";

function getList() {
  let data = localStorage.getItem(pokedexKey);

  if (data) return data.split(separator);
  return [];
}

function setPokedexString(array) {
  localStorage.setItem(pokedexKey, array.join(separator));
}

function add(name) {
  const pokedex = getList();

  pokedex.push(name);

  setPokedexString(pokedex);
}

function remove(name) {
  const pokedex = getList();

  const index = pokedex.indexOf(name.toString());
  if (index === -1) return;

  pokedex.splice(index, 1);

  setPokedexString(pokedex);
}

function doesExist(name) {
  return getList().indexOf(name.toString()) !== -1;
}

const pokemonStorage = {
  add,
  remove,
  doesExist,
};

export default pokemonStorage;
