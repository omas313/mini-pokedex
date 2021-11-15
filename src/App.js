import { Redirect, Route, Switch } from "react-router-dom";
import Pokedex from "./components/Pokedex/Pokedex";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails";
import "./App.css";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/pokemon/:name" component={PokemonDetails} />
        <Route path="/pokedex" component={Pokedex} />

        <Redirect exact from="/" to="/pokedex" />
      </Switch>
    </main>
  );
}

export default App;
