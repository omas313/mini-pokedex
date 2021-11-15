import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

async function getAll() {
  const { data } = await axios.get("/pokemon?limit=1118");
  return data.results;
}

async function get(name) {
  const { data } = await axios.get(`/pokemon/${name}`);
  return data;
}

const pokemonService = {
  getAll,
  get,
};

export default pokemonService;
