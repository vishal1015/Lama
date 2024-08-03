
import { useState, createContext, useContext } from "react";

const GlobalContext = createContext();

export function ContextProvider({children}){
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    return (
        <GlobalContext.Provider
         value={{
            dialogObject :{isDialogOpen, setIsDialogOpen}
            }}
        >
            {children}
        </ GlobalContext.Provider>
    )

}

export default function UseGlobalContextProvider(){
  return useContext(GlobalContext);
}