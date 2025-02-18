import { differenceInSeconds } from 'date-fns'
import {CountDownContainer} from './styles'
import { useContext, useEffect, useState } from 'react'
import { CyclesContext } from '../../Context/CyclesContext'



export function Cowntdown () {
    const {activeCycle, activeCycleId, markCycleAsFinished, amountSecondsPassed, setSecondsPassed} = useContext(CyclesContext)

    const totalSeconds = activeCycle ? activeCycle.minutesForTask * 60 : 0

    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

    const cycleMinutes = Math.floor(currentSeconds / 60) 
    const cycleSeconds = currentSeconds % 60

    const minutes = String(cycleMinutes).padStart(2, "0")
    const seconds = String(cycleSeconds).padStart(2, "0")

    useEffect(() => {
        if (activeCycle) {
            document.title = `${minutes}:${seconds}`
        }

        else{document.title = "Ignite Timer"}
                
    }, [minutes, seconds, activeCycle])


    useEffect(() => {
        let interval: number
        if(activeCycle){
            interval = setInterval(()=> {
                const secondsDifference = differenceInSeconds(
                    new Date(), 
                    new Date(activeCycle.startDate)
                )

                if (secondsDifference >= totalSeconds) {

                markCycleAsFinished()
                setSecondsPassed(totalSeconds)     
        
                }
                else {
                    setSecondsPassed(secondsDifference)
                }         
            }, 1000)
                    return () =>  clearInterval(interval)
        }
    }, [activeCycle, totalSeconds, activeCycleId])

    return (
        <CountDownContainer >
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span>
            <span>:</span>
            <span>{seconds[0]}</span>
            <span>{seconds[1]}</span>
        </CountDownContainer>
    )
}