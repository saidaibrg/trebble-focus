'use client'

import {PlayIcon, PauseIcon, ArrowPathIcon} from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

export default function Countdown() {
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(25)
    const [running, setRunning] = useState(false)
    const [buttonEffect, setButtonEffect] = useState(false)

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
    const resetTimer=() => {
        setRunning(false)
        setSeconds(0)
        setMinutes(25)
    }

    return (
    <div>
        <h1 className="mt-8 text-licorice font-medium text-6xl mx-auto max-w-2xl"> {minutes} : {seconds < 10 ? "0" + seconds : seconds}</h1>
        <div className="max-w-2xl mx-auto space-x-8">
            <button>
                <PlayIcon className={`${buttonEffect && `animate-ping`} hover:bg-rose h-8 w-8 mt-6 text-licorice rounded-md`}
                onClick={event => {
                    startTimer();
                    setButtonEffect(true);
              }} />
            </button>
            <button>
                <PauseIcon className="hover:animate-pulse hover:bg-rose h-8 w-8 mt-6 text-licorice rounded-md" 
                onClick={event => {
                    stopTimer();
                    setButtonEffect(false)
                }} />
            </button>
            <button>
                <ArrowPathIcon className="hover:animate-pulse hover:bg-rose h-8 w-8 mt-6 text-licorice rounded-md" 
                onClick={event => {
                    resetTimer(); 
                    setButtonEffect(false)
                }} />
            </button>
        </div>
    </div>
    )
  }