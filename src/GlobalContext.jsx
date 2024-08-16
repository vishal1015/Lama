
import  { useState, createContext} from "react";

export const GlobalContext = createContext();

// Create a provider component
export const GlobalContextProvider = ({ children }) => {
  const [selectedLang, setSelectedLang] = useState("EN");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <GlobalContext.Provider
      value={{ selectedLang, setSelectedLang, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
