import "./App.css";
import { useState } from "react";
import SearchPokemon from "./components/SearchPokemon";
import PokemondataContainer from "./components/PokemoneDataContainer";

function App() {
  const [pokemonData, setPokemonData] = useState();
  return (
    <>
      <SearchPokemon setPokemonData={setPokemonData} />
      {pokemonData && <PokemondataContainer pokemonData={pokemonData} />}
    </>
  );
}

export default App;
