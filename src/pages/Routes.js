import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "../components/Header"
import Footer from "../components/Footer"

import Home from "./Home"
import Login from "./Login"
import About from './About'
import Contact from './Contact'
import Register from './Register/Register'
import NoPage from './NoPage'
import UseRef from './Hooks/UseRef'
import UseMemo from './Hooks/UseMemo'
import UseContext from './Hooks/UseContext'
import UseState from './Hooks/UseState'
import UseReducer from './Hooks/UseReducer'

export default function CustomRoutes() {
    return (
        <BrowserRouter>
            <Header />

            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />

                    <Route path='/hook/useReducer' element={<UseReducer />} />
                    <Route path='/hook/useContext' element={<UseContext />} />
                    <Route path='/hook/useMemo' element={<UseMemo />} />
                    <Route path='/hook/useRef' element={<UseRef />} />
                    <Route path='/hook/useState' element={<UseState />} />


                    <Route path='*' element={<NoPage />} />
                </Routes>
            </main>

            <Footer />
        </BrowserRouter>
    )
}
