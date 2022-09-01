import { createContext, useContext, useState } from "react";

export const CharContext = createContext({});

export const useChars = () => {
    return useContext(CharContext)
}

export const CharProvider = ({ children }) => {
  const [chars, setChars] = useState([]);
  const charContext = {
    charsContext: chars,
    feedChars: (arrayValue) => {
      setChars([...arrayValue]);
    },
  };
  return (
    <CharContext.Provider value={charContext}>{children}</CharContext.Provider>
  );
};

export default CharProvider;
