/* eslint-disable react/prop-types */
export default function FavoritesPokemonBtn({
  pokemonData,
  favoritePokemons,
  setFavoritePokemons,
}) {
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
