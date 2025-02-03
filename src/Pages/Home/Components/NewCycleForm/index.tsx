import { FormContainer, MinutesForTask, TaskInput } from "./styles"
import { CyclesContext } from "../../Context/CyclesContext"
import { useFormContext } from "react-hook-form"
import { useContext } from "react"

export function NewCycleForm (){
    const {activeCycle} = useContext(CyclesContext)
    const {register} = useFormContext()

    return (
        <FormContainer>   
                    <label htmlFor="task">Vou trabalhar em</label>
            
                    <TaskInput 
                    type="text" 
                    id="task" 
                    placeholder="Dê um nome para o seu projeto"
                    disabled={!!activeCycle}
                    list="taskSuggestions"
                    {...register("task")}
                   />

                    <datalist id="taskSuggestions">
                        <option value="Estudar TypeScript"/>
                        <option value="Ler livro sobre fundamentos de NodeJS"/>
                        <option value="Tirar dúvidas"/>
                        <option value="Continuar com o projeto X"/>
                    </datalist>

                    <label htmlFor="minutesForTask">durante</label>
 
                    <MinutesForTask 
                    type="number" 
                    disabled={!!activeCycle}
                    id="minutesForTask" 
                    placeholder="00" 
                   
                    {...register("minutesForTask", {valueAsNumber: true})}
                   />

                    <label htmlFor="minutesForTask">minutos.</label>
                </  FormContainer>
    )
}