import React from 'react'

export default function CommonPage(props) {

    const { text } = props

    return (
        <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>{text ? text : "Common Page"}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
