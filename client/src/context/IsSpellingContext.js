import { createContext, useState } from "react";

export const IsSpellingContext = createContext();

export const IsSpellingProvider = (props) => {
    
    const [isSpelling, setIsSpelling] = useState(false);

    return (
        <IsSpellingContext.Provider value={[isSpelling, setIsSpelling]}>
            {props.children}
        </IsSpellingContext.Provider>
    );
};