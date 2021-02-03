import React, {useState} from 'react'
import Countdown from './Countdown'

export default function Components() {
    const [seconds, setSeconds] = useState(0)

    function onSecondsChange(event) {
        const newSeconds = parseInt(event.target.value)
        if (event.target.value >= 0) {
            setSeconds(newSeconds)
        }
    }

    return (
        <div className="container">
            <h1>Components</h1>
            <p>{seconds} seconds for my timer</p>
            <input type="number" value={seconds} onChange={onSecondsChange} />
            <Countdown seconds={seconds} />
        </div>
    )
}