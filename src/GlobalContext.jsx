
import  { createContext} from "react";

export const GlobalContext = createContext();

// Create a provider component
export const GlobalContextProvider = ({ children }) => {

  return (
    <GlobalContext.Provider value={{}}>
      {children}
    </GlobalContext.Provider>
  );
};
