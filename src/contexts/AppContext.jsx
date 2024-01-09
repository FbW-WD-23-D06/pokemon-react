/* eslint-disable react/prop-types */
import { useContext, useState, createContext } from "react";

export const AppContext = createContext(null);

export function AppContextProvider({ children }) {
  const [pokemonData, setPokemonData] = useState();
  return (
    <AppContext.Provider value={{ pokemonData, setPokemonData }}>
      {children}
    </AppContext.Provider>
  );
}
