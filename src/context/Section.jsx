/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext,useState } from "react";

const SectionContext = createContext();

const SectionContextProvider = ({children}) => {
    const [activeNavItem, setActiveNavItem] = useState("");
    return (
        <SectionContext.Provider value={{activeNavItem, setActiveNavItem}}>
            {children}
        </SectionContext.Provider>
    )
}

export const Sections = SectionContext;
export default SectionContextProvider;