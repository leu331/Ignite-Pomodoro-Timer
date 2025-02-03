import { createContext, ReactNode, useState } from "react"
import {Cycle} from '../index'
import { v4 as uuidv4 } from 'uuid';
import { NewCycleForm } from "../Components/NewCycleForm";


export interface CyclesContextType {
    cycles:  Cycle[]
    activeCycle: Cycle | undefined
    activeCycleId: string | null
    markCycleAsFinished: () => void
    amountSecondsPassed: number
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
    const [cycles, setCycles] = useState<Cycle[]>([])
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

     const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

     function markCycleAsFinished (){
        setCycles(state => state.map((cycle) => {
            if (cycle.id === activeCycle?.id) {
                return {...cycle, finishedDate: new Date()}

             
            }
            else {
                return cycle
            }
        }),
    ) 
       setActiveCycleId(null)
    }

    function createNewCycle (data: CreateCycleData) {
        
        if (data.minutesForTask > 60) {
            window.alert("Ao realizar uma tarefa de mais de 60 minutos, busque reservar outros 15 minutos para descanso! :)")
        }

       const newCycle = {
            id: uuidv4(),
            task: data.task,
            minutesForTask: data.minutesForTask,
            startDate: new Date,
       }
 
        setCycles((state) => [...cycles, newCycle])
        setActiveCycleId(newCycle.id)

    } 

    function handleStopCycle(){
        console.log("Parando ciclo:", activeCycle);
        setCycles(state => state.map((cycle) => {
            if (cycle.id === activeCycle?.id) {
                return {...cycle, interruptedDate: new Date()}
            }

            else {
                return cycle
            }
        }))
        
        setActiveCycleId(null)
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