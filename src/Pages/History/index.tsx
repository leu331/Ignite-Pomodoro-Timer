import { useContext } from "react";
import { HistoryContainer, HistoryList, Status } from "./styles";
import { CyclesContext } from "../Home/Context/CyclesContext";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function History (){

    const {cycles} = useContext(CyclesContext)
    return (
        <HistoryContainer>
            <h1>Meu histórico</h1>
            
            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Inicio</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                       {cycles.map(cycles => {
                        console.log("Ciclo:", cycles);
                        return (
                            
                            
                            <tr key={cycles.id}>
                            <td>{cycles.task}</td>
                            <td>{cycles.minutesForTask} minutos</td>
                            <td>{formatDistanceToNow(cycles.startDate, {
                                addSuffix: true,
                                locale: ptBR
                            })}</td>
                            <td>
                                {cycles.finishedDate && (
                                    <Status status="completed">Concluído</Status>
                                )}

                                {cycles.interruptedDate && (
                                    <Status status="interrupted">Interrompido</Status>
                                )}

                                {!cycles.finishedDate && !cycles.interruptedDate && (
                                    <Status status="inProgress">Em andamento</Status>
                                )}
                            </td>
                        </tr>
                        )
                       })}
                       
                                 
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    )
   
}