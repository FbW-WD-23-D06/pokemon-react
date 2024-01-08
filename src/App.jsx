import "./App.css";
import { useState, useEffect } from "react";
import SearchPokemon from "./components/SearchPokemon";
import PokemonDataContainer from "./components/PokemoneDataContainer";
import FavoritesPokemon from "./components/FavoritesPokemon";

function App() {
  const [pokemonData, setPokemonData] = useState();
  const [favoritePokemons, setFavoritePokemons] = useState(
    JSON.parse(localStorage.getItem("favoritePokemons")) || []
  );

  useEffect(() => {
    if (!pokemonData?.name) return;
    const currentPokemonAlreadySaved = favoritePokemons.includes(
      pokemonData?.name
    );
    if (!currentPokemonAlreadySaved) {
      localStorage.setItem(
        "favoritePokemons",
        JSON.stringify([...favoritePokemons, pokemonData?.name])
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
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

      {favoritePokemons && (
        <FavoritesPokemon favoritePokemons={favoritePokemons} />
      )}
    </>
  );
}

export default App;
