import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { CountContext } from '../../context/CountContext'

export default function Hero() {

    const { myName } = useContext(AuthContext)
    const { count } = useContext(CountContext)

    const [color, setColor] = useState("danger")

    return (
        <div className='text-center'>
            <h1>My favorite button color is {color}!</h1>
            <h1>My name is {myName}!</h1>
            <h1>Counting is {count}!</h1>
            <button
                type="button"
                onClick={() => setColor("primary")}
            >Primary</button>
            <button
                type="button"
                onClick={() => setColor("danger")}
            >Danger</button>
            <button
                type="button"
                onClick={() => setColor("info")}
            >Info</button>
            <button
                type="button"
                onClick={() => setColor("success")}
            >Success</button>
            <br />
            <br />

            <button className={`btn btn-${color}`}>I'm a button</button>
        </div>
    )
}
