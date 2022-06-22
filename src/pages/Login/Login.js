import React, { useState } from 'react'
// import { AuthContext } from '../../context/AuthContext'

export default function Login() {

    // const { myName, setMyName } = useContext(AuthContext)

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("userName => ", userName)
        console.log("password => ", password)

        if (password.length < 6) {
            alert("Minimum length should be 6")
            return
        }

    }

    return (
        <div className='py-5'>
            <div className="container">
                {/* <div className="row mb-3">
                    <div className="col">
                        <input type="text" placeholder='Enter your name' className='form-control' defaultValue={myName} onChange={(e) => { setMyName(e.target.value) }} />
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <div className="card p-2 p-md-3 p-lg-4">
                            <h2 className="text-center text-dark mb-4">Login Form</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="row mb-3">
                                    <div className="col">
                                        <input type="text" placeholder='Enter your username' className='form-control' onChange={(e) => { setUserName(e.target.value) }} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <input type="password" placeholder='Enter your password' className='form-control' onChange={e => { setPassword(e.target.value) }} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col text-center">
                                        <button className='btn btn-success w-100'>Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
