import { useAppContext } from "../contexts/AppContext";

/* eslint-disable react/prop-types */
export default function FavoritesPokemonBtn({
  favoritePokemons,
  setFavoritePokemons,
}) {
  const { pokemonData } = useAppContext();
  const currentPokemonAlreadySaved = favoritePokemons.includes(
    pokemonData.name
  );

  const addFavorite = () => {
    if (currentPokemonAlreadySaved) {
      alert("already saved");
      return;
    }
    setFavoritePokemons([...favoritePokemons, pokemonData.name]);
  };

  return (
    <>
      <button onClick={addFavorite} /*disabled={currentPokemonAlreadySaved}*/>
        Add Favorite
      </button>
    </>
  );
}
