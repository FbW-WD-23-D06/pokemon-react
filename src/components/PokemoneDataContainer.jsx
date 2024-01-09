import FavoritesPokemonBtn from "./FavoritesPokemonBtn";
import { useAppContext } from "../contexts/AppContext";

/* eslint-disable react/prop-types */
export default function PokemonDataContainer({
  favoritePokemons,
  setFavoritePokemons,
}) {
  const { pokemonData } = useAppContext();
  const { name, sprites, types, stats } = pokemonData;

  return (
    <>
      <FavoritesPokemonBtn
        favoritePokemons={favoritePokemons}
        setFavoritePokemons={setFavoritePokemons}
      />
      <h2>{name}</h2>
      <img src={sprites.front_default} alt={name} />
      <h3>Types</h3>
      <ul>
        {types.map((type) => {
          return <li key={type.type.name}>{type.type.name}</li>;
        })}
      </ul>
      <h3>Stats</h3>
      <ul>
        {stats.map((stat) => {
          return (
            <li key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          );
        })}
      </ul>
    </>
  );
}
