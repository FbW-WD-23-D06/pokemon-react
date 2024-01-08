/* eslint-disable react/prop-types */
export default function FavoritesPokemon({favoritePokemons}) {

  console.log('favoritePokemons:',favoritePokemons);

  return (
    <>
      <h1>FavoritesPokemon</h1>
      <ul>
        {favoritePokemons.map((pokemon) => {
          return <li key={pokemon}>{pokemon}</li>;
        })}
      </ul>
    </>
  );
}
