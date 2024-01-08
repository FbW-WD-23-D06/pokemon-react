import "./App.css";
import { useState } from "react";
import SearchPokemonInp from "./components/SearchPokemonInp";
import PokemondataContainer from "./components/PokemoneDataContainer";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  return (
    <>
      <SearchPokemonInp
        setPokemonName={setPokemonName}
        pokemonName={pokemonName}
      />
      <PokemondataContainer pokemonName={pokemonName} />
    </>
  );
}

export default App;
