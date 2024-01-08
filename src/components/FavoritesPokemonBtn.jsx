/* eslint-disable react/prop-types */
export default function FavoritesPokemonBtn({ pokemonData }) {
  console.log("pokemonData:", pokemonData);
  let favoritePokemons =
    JSON.parse(localStorage.getItem("favoritePokemons")) || [];
  // 1 wenn wir klicken den button, werden wir ein pokemon in dem localStorage array HINZUFÜGEN

  // UND EIN EVENT UM DAS ZU SPEICHERN

  const currentPokemonAlreadySaved = favoritePokemons.includes(
    pokemonData.name
  );

  const addFavorite = () => {
    if (currentPokemonAlreadySaved) {
      alert("already saved");
      return;
    }
    console.log("addFavorite");
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
