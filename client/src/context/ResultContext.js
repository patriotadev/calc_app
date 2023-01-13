import { createContext, useState } from "react";

export const ResultContext = createContext();

export const ResultProvider = (props) => {
    const [result, setResult] = useState("");

    return (
        <ResultContext.Provider value={[result, setResult]}>
            {props.children}
        </ResultContext.Provider>
    );
}