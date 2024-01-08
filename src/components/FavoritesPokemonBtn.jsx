/* eslint-disable react/prop-types */
export default function FavoritesPokemonBtn({ pokemonData }) {
  let favoritePokemons =
    JSON.parse(localStorage.getItem("favoritePokemons")) || [];
  const currentPokemonAlreadySaved = favoritePokemons.includes(
    pokemonData.name
  );

  const addFavorite = () => {
    if (currentPokemonAlreadySaved) {
      alert("already saved");
      return;
    }
    localStorage.setItem(
      "favoritePokemons",
      JSON.stringify([...favoritePokemons, pokemonData.name])
    );
  };

  return (
    <>
      <button onClick={addFavorite} /*disabled={currentPokemonAlreadySaved}*/>
        Add Favorite
      </button>
    </>
  );
}
