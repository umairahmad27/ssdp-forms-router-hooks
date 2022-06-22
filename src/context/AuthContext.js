import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const initialState = "Farrukh Zaman"

export default function AuthContextProvider(props) {

    const [myName, setMyName] = useState(initialState)

    return (
        <AuthContext.Provider value={{ myName, setMyName }}>
            {props.children}
        </AuthContext.Provider>
    )
}
