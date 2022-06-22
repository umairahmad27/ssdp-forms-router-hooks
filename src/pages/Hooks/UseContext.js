import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { CountContext } from '../../context/CountContext'

export default function UseContext() {

    const { count, handleIncrement, handleDecrement, handleReset } = useContext(CountContext)

    return (
        <div className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1 className='mb-4'>UseContext Hook</h1>

                        <button className='btn btn-success' onClick={handleIncrement}>Increment</button>
                        <h4 className='my-3'>{count}</h4>
                        <button className='btn btn-danger' onClick={handleDecrement}>Decrement</button>

                        <hr />

                        {/* <div style={{ height: 500, border: "1px solid red", borderRadius: 40 }}></div> */}

                        <button className='btn btn-info' onClick={handleReset}>Reset</button>

                        <hr />

                        <Link to="/" className='btn btn-warning'>Go to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
