import "./App.css";
import { useState, useEffect } from "react";
import SearchPokemon from "./components/SearchPokemon";
import PokemonDataContainer from "./components/PokemoneDataContainer";
import FavoritesPokemon from "./components/FavoritesPokemon";
import { useAppContext } from "./contexts/AppContext";

function App() {
  const [favoritePokemons, setFavoritePokemons] = useState(
    JSON.parse(localStorage.getItem("favoritePokemons")) || []
  );
  const { pokemonData } = useAppContext();

  useEffect(() => {
    if (!favoritePokemons.length === 0) return;
    localStorage.setItem("favoritePokemons", JSON.stringify(favoritePokemons));
  }, [favoritePokemons]);

  return (
    <>
      <SearchPokemon />
      {pokemonData && (
        <PokemonDataContainer
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
