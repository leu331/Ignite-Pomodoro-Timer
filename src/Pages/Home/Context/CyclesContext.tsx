import { createContext, ReactNode, useEffect, useReducer, useState } from "react"
import {Cycle} from '../index'
import { v4 as uuidv4 } from 'uuid';
import { cyclesReducer } from "../../../Reducers/Cycles/cycles";
import { ActionTypes, addNewCycleAction, interruptCycleAction, markCycleAsFinishedAction } from "../../../Reducers/Cycles/Actions";
import { differenceInSeconds } from "date-fns";

export interface CyclesContextType {
    cycles:  Cycle[]
    activeCycle: Cycle | undefined
    activeCycleId: string | null
    amountSecondsPassed: number
    markCycleAsFinished: () => void
    setSecondsPassed: (seconds: number) => void
    createNewCycle: (data: CreateCycleData) => void
    handleStopCycle: () => void
}

interface CreateCycleData {
    task: string,
    minutesForTask: number
}

interface CyclesContextProviderProps {
    children: ReactNode
}

export const CyclesContext = createContext({} as CyclesContextType)

export function CyclesContextProvider({children}: CyclesContextProviderProps) {
    const [cyclesState, dispatch] = useReducer ( cyclesReducer, {
        cycles: [],
        activeCycleId: null
    }, () => {
        const storedStateAsJSON = localStorage.getItem("@ignite-timer:cycles-state-1.0.0")

        if (storedStateAsJSON) {
            return JSON.parse(storedStateAsJSON)
        }

        return {
            cycles: [],
            activeCycleId: null
        }
    })

    const {cycles, activeCycleId} = cyclesState
    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

    const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
        if (activeCycle) {
            return differenceInSeconds(
            new Date(), 
            new Date(activeCycle.startDate)
            )
        }

        return 0
    })

    useEffect(() => {
        const stateJSON = JSON.stringify(cyclesState)
        localStorage.setItem("@ignite-timer:cycles-state-1.0.0", stateJSON)
    }, [cyclesState])


     function markCycleAsFinished (){
        dispatch(markCycleAsFinishedAction())
    //     setCycles(state => state.map((cycle) => {
    //         if (cycle.id === activeCycle?.id) {
    //             return {...cycle, finishedDate: new Date()}         
    //         }
    //         else {
    //             return cycle
    //         }
    //     }),
    // )     
    }

    function createNewCycle (data: CreateCycleData) {
        
        if (data.minutesForTask > 60) {
            window.alert("Ao realizar uma tarefa de mais de 60 minutos, busque reservar outros 15 minutos para descanso! :)")
        }

       const newCycle = {
            id: uuidv4(),
            task: data.task,
            minutesForTask: data.minutesForTask,
            startDate: new Date(),
       }

       dispatch(addNewCycleAction(newCycle))
        // setCycles((state) => [...cycles, newCycle])
    } 

    function handleStopCycle(){
        dispatch(interruptCycleAction())

        // console.log("Parando ciclo:", activeCycle);
        // setCycles(state => state.map((cycle) => {
        //     if (cycle.id === activeCycle?.id) {
        //         return {...cycle, interruptedDate: new Date()}
        //     }

        //     else {
        //         return cycle
        //     }
        // }))

        setAmountSecondsPassed(0)
    }
    
    function setSecondsPassed(seconds: number) {
        setAmountSecondsPassed(seconds)
    }

     return (
        <CyclesContext.Provider value={{
            cycles,         
            activeCycle,
            activeCycleId,
            markCycleAsFinished,
            amountSecondsPassed,
            setSecondsPassed,
            createNewCycle,
            handleStopCycle
        }}>
            {children}
        </CyclesContext.Provider>
     )
}