import "./App.css";
import { useState } from "react";
import SearchPokemon from "./components/SearchPokemon";
import PokemonDataContainer from "./components/PokemoneDataContainer";

function App() {
  const [pokemonData, setPokemonData] = useState();
  return (
    <>
      <SearchPokemon setPokemonData={setPokemonData} />
      {pokemonData && <PokemonDataContainer pokemonData={pokemonData} />}
    </>
  );
}

export default App;
