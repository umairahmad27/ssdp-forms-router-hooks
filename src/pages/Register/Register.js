import React, { useState, useEffect } from 'react'

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
}

export default function Register() {

    const [state, setState] = useState(initialState)
    const [color, setColor] = useState("danger")

    useEffect(() => {
        console.log("useEffect is working, and now the color is " + color)
    }, [color])

    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const { firstName } = state

        if (firstName.length < 3) {
            alert("Enter your name correctly.")
            return;
        }

        console.log("firstName => ", firstName)
        console.log("state => ", state)
        // console.log("password => ", password)

        // if (password.length < 6) {
        //     alert("Minimum length should be 6")
        //     return
        // }

    }

    return (
        <div className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <div className="card p-2 p-md-3 p-lg-4">
                            <h2 className="text-center text-dark mb-4">Register Form</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-12 col-md-6 mb-3">
                                        <input type="text" name='firstName' placeholder='Enter your first name' className='form-control' onChange={handleChange} />
                                    </div>
                                    <div className="col-12 col-md-6 mb-3">
                                        <input type="text" name='lastName' placeholder='Enter your last name' className='form-control' onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <input type="email" name='email' placeholder='Enter your email' className='form-control' onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <input type="password" name='password' placeholder='Enter your password' className='form-control' onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col text-center">
                                        <button className='btn btn-info w-100'>Register</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <h1>My favorite button color is {color}!</h1>
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
        </div>
    )
}
