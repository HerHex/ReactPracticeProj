import React, {useState, createContext} from 'react';


export const Context = createContext();

const QueryProvider = (props) => {
    const [query, setQuery] = useState();
    

    return (
        <Context.Provider value={[query, setQuery]}>{props.children}</Context.Provider>
        
    )
}

export default QueryProvider;