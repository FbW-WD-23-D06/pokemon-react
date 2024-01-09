/* eslint-disable react/prop-types */
import { useContext, useState, createContext } from "react";

const AppContext = createContext(null);
console.log('AppContext:',AppContext);

export function AppContextProvider({ children }) {
  const [pokemonData, setPokemonData] = useState();

  return (
    <AppContext.Provider value={{ pokemonData, setPokemonData }}>
      {children}
    </AppContext.Provider>
  );
}
