import React, { useReducer } from 'react'
import { Link } from "react-router-dom"

const initialState = 0

const reducer = (state, action) => {

    switch (action.type) {
        case "INCREMENT":
            return state + 1
        case "DECREMENT":
            return state - 1
        case "RESET":
            return initialState
        default:
            return state
    }
}

export default function UseReducer() {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1 className='mb-4' style={{ userSelect: "none" }}>UseReducer Hook</h1>

                        <button className='btn btn-success' onClick={() => { dispatch({ type: "INCREMENT" }) }}>Increment</button>
                        <h4 className='my-3'>{state}</h4>
                        <button className='btn btn-danger' onClick={() => { dispatch({ type: "DECREMENT" }) }}>Decrement</button><br />

                        <hr />

                        {/* <div style={{ height: 500, border: "1px solid red", borderRadius: 40 }}></div> */}

                        <button className='btn btn-info' onClick={() => { dispatch({ type: "RESET" }) }}>Reset</button>

                        <hr />

                        <Link to="/" className='btn btn-warning'>Go to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}