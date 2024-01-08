// eslint-disable-next-line react/prop-types
export default function SearchPokemonInp({ setPokemonName, pokemonName }) {

  const handleOnChangePokemoneName = (e) => {
    setPokemonName(e.target.value);
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
    </>
  );
}
