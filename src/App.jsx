import "./App.css";
import { useState, useEffect } from "react";
import SearchPokemon from "./components/SearchPokemon";
import PokemonDataContainer from "./components/PokemoneDataContainer";
import FavoritesPokemon from "./components/FavoritesPokemon";

function App() {
  // const [pokemonData, setPokemonData] = useState();
  const [favoritePokemons, setFavoritePokemons] = useState(
    JSON.parse(localStorage.getItem("favoritePokemons")) || []
  );

  useEffect(() => {
    if (!favoritePokemons.length === 0) return;
    localStorage.setItem("favoritePokemons", JSON.stringify(favoritePokemons));
  }, [favoritePokemons]);

  return (
    <>
      <SearchPokemon setPokemonData={setPokemonData} />
      {pokemonData && (
        <PokemonDataContainer
          pokemonData={pokemonData}
          favoritePokemons={favoritePokemons}
          setFavoritePokemons={setFavoritePokemons}
        />
      )}

      {favoritePokemons.length > 0 && (
        <FavoritesPokemon favoritePokemons={favoritePokemons} />
      )}
    </>
  );
}

export default App;
