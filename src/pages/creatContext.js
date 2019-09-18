


   import React, { createContext, useReducer } from 'react'
    export const Corlor = createContext({})
    const sb = (state, action) => {
    switch (action) {
        case action:
            return action               
        default:
            return state            
    }
    }
   
    export const ShowColor = x => {
        const [color, fun] = useReducer(sb, 'green')
        return (
            <Corlor.Provider value={{ color,fun }}>
                {x.children}
            </Corlor.Provider>
        )
    }