import { useState } from "react";
import { POKEMON_BASISC_API_URL } from "../data/api";
import { BallTriangle } from "react-loader-spinner";
// eslint-disable-next-line react/prop-types
export default function SearchPokemonInp({ setPokemonName, pokemonName }) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChangePokemoneName = (e) => {
    setPokemonName(e.target.value);
  };

  const fetchPokemon = async () => {
    setIsLoading(true);
    try {
      const data = await fetch(`${POKEMON_BASISC_API_URL}/${pokemonName}`);
      const response = await data.json();
      console.log("response", response);
      return response;
    } catch (err) {
      console.log(err);
      setError(err);
    }
    finally{
      setIsLoading(false);
    }
  };

  return (
    <>
      <label htmlFor="search">Search Pokemon</label>
      <input
        type="text"
        placeholder="Search Pokemon"
        value={pokemonName}
        onChange={handleOnChangePokemoneName}
      />
      <button onClick={fetchPokemon}>get pokemon data</button>
      {isLoading && (
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </>
  );
}
