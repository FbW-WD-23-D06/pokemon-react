import "./App.css";
import { useState } from "react";
import SearchPokemon from "./components/SearchPokemon";
import PokemondataContainer from "./components/PokemoneDataContainer";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  return (
    <>
      <SearchPokemon
        setPokemonName={setPokemonName}
        pokemonName={pokemonName}
      />
      <PokemondataContainer pokemonName={pokemonName} />
    </>
  );
}

export default App;
