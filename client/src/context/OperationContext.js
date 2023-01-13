import { createContext, useState } from "react";

export const OperationContext = createContext();

export const OperationProvider = (props) => {
    const [operation, setOperation] = useState([]);

    return (
        <OperationContext.Provider value={[operation, setOperation]}>
            {props.children}
        </OperationContext.Provider>
    );
}