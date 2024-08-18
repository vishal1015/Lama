
import  { useState, createContext, useEffect} from "react";

export const GlobalContext = createContext();

// Create a provider component
export const GlobalContextProvider = ({ children }) => {
  const [selectedLang, setSelectedLang] = useState("EN");
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const saved = localStorage.getItem("isLoggedIn");
    return saved === "true" || false;
  });

   useEffect(() => {
     localStorage.setItem("isLoggedIn", isLoggedIn);
   }, [isLoggedIn]);

  return (
    <GlobalContext.Provider
      value={{ selectedLang, setSelectedLang, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
