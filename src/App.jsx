import "./App.css";
import { useState } from "react";
import SearchPokemonInp from "./components/SearchPokemonInp";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  return (
    <>
      <SearchPokemonInp setPokemonName={setPokemonName} pokemonName={pokemonName}/>
    </>
  );
}

export default App;
