'use client'

import {PlayIcon, PauseIcon, WrenchIcon} from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

export default function Countdown() {
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(1)
    const [running, setRunning] = useState(false)

    useEffect(() => {
        if(running) {
            // setInterval repeats a callback function every x milliseconds
            const timer=setInterval(() => {
                if (minutes===0 && seconds===0){
                    setRunning(false)
                }
                else if (seconds === 0) {
                    setSeconds(59)
                    setMinutes(minutes => minutes - 1)
                }
                else if (seconds>0)
                {
                    setSeconds(seconds => seconds - 1)
                }            
            }, 1000)
            return () => clearInterval(timer)
        }
    },[seconds, minutes, running])

    const startTimer=() => {
        setRunning(true)
    }
    const stopTimer=() => {
        setRunning(false)
    }

    return (
    <div>
        <h1 className="mt-8 text-licorice font-medium text-6xl mx-auto max-w-2xl"> {minutes} : {seconds < 10 ? "0" + seconds : seconds}</h1>
        <div className="max-w-2xl mx-auto space-x-8">
            <button>
                <PlayIcon className="h-8 w-8 mt-6 text-licorice" onClick={startTimer} />
            </button>
            <button>
                <PauseIcon className="h-8 w-8 mt-6 text-licorice" onClick={stopTimer} />
            </button>
            <button>
                <WrenchIcon className="h-8 w-8 mt-6 text-licorice" />
            </button>
        </div>
    </div>
    )
  }