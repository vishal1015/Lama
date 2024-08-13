
import  { useState, createContext} from "react";

export const GlobalContext = createContext();

// Create a provider component
export const GlobalContextProvider = ({ children }) => {
  const [selectedLang, setSelectedLang] = useState("EN");
  return (
    <GlobalContext.Provider value={{ selectedLang, setSelectedLang }}>
      {children}
    </GlobalContext.Provider>
  );
};
