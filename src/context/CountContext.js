import React, { useState, createContext } from 'react'

export const CountContext = createContext()

const initialState = 0

export default function CountContextProvider(props) {

    const [count, setCount] = useState(initialState)

    const handleIncrement = () => {
        setCount(c => c + 1)
    }
    const handleDecrement = () => {
        count > 0 && setCount(c => c - 1)
    }
    const handleReset = () => {
        setCount(initialState)
    }

    return (
        <CountContext.Provider value={{ count, handleIncrement, handleDecrement, handleReset }}>
            {props.children}
        </CountContext.Provider>
    )
}
