import { Play, HandPalm } from "@phosphor-icons/react";
import { HomeContainer, StartDownContainer, CloseDownContainer } from "./styles";
import { useContext } from "react";

import { NewCycleForm } from "./Components/NewCycleForm";
import { Cowntdown } from "./Components/Cowntdown";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { CyclesContext } from "./Context/CyclesContext";

interface FormData {
    task: string, 
    minutesForTask: number
}

// type FormData = zod.infer<typeof schema> 

export interface Cycle {
    
    id: string
    task: string,
    minutesForTask: number,
    startDate: Date,
    interruptedDate?: Date,
    finishedDate?: Date
}


const schema = zod.object ({
    task: zod.string().min(1, "Informe a tarefa."),
    minutesForTask: zod.number().min(1, "O ciclo precisa ser de, no mínimo, 5 minutos").max(120, "O ciclo precisa ser de, no máximo, 120 minutos")
})




export function Home () {
    const {createNewCycle, handleStopCycle, activeCycle, activeCycleId} = useContext(CyclesContext)


    function handleCreateNewCycle (data: FormData) {
        createNewCycle(data)
        reset()
    }
   
    
       const newCycleForm = useForm<FormData>({
                defaultValues: {
                    task: "",
                    minutesForTask: 0
                },
        
                resolver: zodResolver(schema)
                
            })

    const {handleSubmit, watch, reset} = newCycleForm

    const task = watch("task")
    const minutesForTask = watch("minutesForTask")

    const isSubmitDisabled = !task || !minutesForTask

    // const [task, setTasks] = useState("")
    // const [minutesForTask, setMinutesForTask] = useState(0)

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)}>

                
                    <FormProvider {...newCycleForm}>
                        <NewCycleForm/>
                    </FormProvider>
                    
                     {activeCycle ? (
                    <div id="taskActive"><p>{`Tarefa atual: ${activeCycle.task}`}</p></div>
                    ) : (
                    <div>
                         <div id="taskInActive"><p></p></div>
                    </div>
                    )}
                    
                    <Cowntdown/>

                {activeCycle ? (
                    <CloseDownContainer onClick={handleStopCycle} type="button">
                    <HandPalm/>
                   <span>Interromper</span>
                </CloseDownContainer>
                ):(<StartDownContainer type="submit"  disabled={isSubmitDisabled}>
                    <Play/>
                   <span>Começar</span>
                </StartDownContainer>)}
            </form>
        </HomeContainer>
    )
}