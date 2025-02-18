import { Cycle } from "./cycles";

export enum ActionTypes {
    addNewCycle = "addNewCycle",
    interruptCycle = "interruptCycle",
    markCycleAsFinished = "markCycleAsFinished",
}

export function addNewCycleAction(newCycle: Cycle){
    return {
        type: ActionTypes.addNewCycle,
        payload: {
            newCycle
        }
    }
}

export function interruptCycleAction() {
    return{
        type: ActionTypes.interruptCycle,
    } 
}

export function markCycleAsFinishedAction (){
    return {
        type: ActionTypes.markCycleAsFinished,
    }
}
   