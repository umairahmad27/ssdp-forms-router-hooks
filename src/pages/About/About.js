import React, { useContext } from 'react'
import CommonPage from '../../components/CommonPage'
import { AuthContext } from '../../context/AuthContext'

export default function About() {

    const { myName } = useContext(AuthContext)

    return (
        <CommonPage text={myName} />
    )
}
