import React, { useState, useEffect } from 'react'
import { users } from "../../data/Users"

// const initialUsers = users
// const statuses = ["all", "active", "inactive", "pending"]

export default function Users() {

    const [documents, setDocuments] = useState([])
    const [status, setStatus] = useState("active")
    const [limit, setLimit] = useState("5")

    useEffect(() => {

        // let limit = "2"

        if (status !== "all") {
            let filteredDocs = users.filter((user) => {
                return user.status === status
            })
            setDocuments(filteredDocs)
        } else {
            setDocuments(users.slice(0, limit))
        }

    }, [status, limit])


    return (
        <div className='py-5 mt-5'>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>Users with status {status}</h1>

                        <select className='form-control w-25 mx-auto' onChange={e => { setStatus(e.target.value) }}>
                            <option value="all">all</option>
                            <option value="active">active</option>
                            <option value="inactive">inactive</option>
                            <option value="pending">pending</option>
                            {/* {statuses.map((status) => {
                                return <option key={status} value={status}>{status}</option>
                            })} */}
                        </select>
                        <input type="number" placeholder='Enter limit' value={limit} onChange={e => { setLimit(e.target.value) }} />

                        <ol>
                            {documents.map((user, i) => {
                                return <li key={i}>Name: <b>{user.name}</b> and status is <b>{user.status}</b></li>
                            })}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}
