import React, { useEffect, useRef } from 'react'

import notification from "../../assets/audios/music.mp3"

export default function UseRef() {

    const notificationPlayer = useRef(null)

    useEffect(() => {
        // console.log(notificationPlayer.current.play())
        console.log("it's working")
        // notificationPlayer.current.play()
    }, [])

    return (
        <div className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <audio ref={notificationPlayer} src={notification}></audio>
                    </div>
                </div>
            </div>
        </div>
    )
}
