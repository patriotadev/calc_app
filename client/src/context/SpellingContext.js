import { createContext, useState } from "react";

export const SpellingContext = createContext();

export const SpellingProvider = (props) => {

    const [spelling, setSpelling] = useState("");

    return (
        <SpellingContext.Provider value={[spelling, setSpelling]}>
            {props.children}
        </SpellingContext.Provider>
    );
};