import React, { createContext, useReducer } from 'react'
import Reducer from './reducer'

const initialState = {
    carts: [],
    itemQuantity: 1,
    loading: false,
    currentUser: null,
    progress: 0
}

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState)
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}
export const Context = createContext()
export default Store