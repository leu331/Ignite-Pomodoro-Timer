import { ActionTypes } from "./Actions"
import {produce} from "immer"

export interface Cycle {
    
    id: string
    task: string,
    minutesForTask: number,
    startDate: Date,
    interruptedDate?: Date,
    finishedDate?: Date
}

interface CyclesState {
    cycles: Cycle[]
    activeCycleId: string | null
}

export function cyclesReducer (state: CyclesState, action: any) {
    switch (action.type) {
        case ActionTypes.addNewCycle:
            return produce(state, (draft) => {
                draft.cycles.push(action.payload.newCycle)
                draft.activeCycleId = action.payload.newCycle.id
            })
            
        case ActionTypes.interruptCycle:
            // return {
            //     ...state, 
            //     cycles: state.cycles.map((cycle) => {
            //         if (cycle.id === state.activeCycleId) {
            //             return {...cycle, interruptedDate: new Date()}
            //         }
        
            //         else {
            //             return cycle
            //         }
            //     }),
            //     activeCycleId: null
            // }

            const currentCycleIndex = state.cycles.findIndex(cycle => {
                return cycle.id === state.activeCycleId
            })

            if (currentCycleIndex < 0) {
                return state 
            }

            return produce(state, (draft) => {
                draft.activeCycleId = null
                draft.cycles[currentCycleIndex].interruptedDate = new Date()
            })

        case ActionTypes.markCycleAsFinished:
            // return {
            //     ...state, 
            //     cycles: state.cycles.map((cycle) => {
            //         if (cycle.id === state.activeCycleId) {
            //             return {...cycle, finishedDate: new Date()}
            //         }
        
            //         else {
            //             return cycle
            //         }
            //     }),
            //     activeCycleId: null
            // }

                return produce(state, (draft) => {
                    draft.activeCycleId = null
                    draft.cycles[currentCycleIndex].finishedDate = new Date()
                })

            

        default:
            return state
    }

//     if (action.type === "addNewCycle") {
//         return {
//             ...state,
//             cycles: [...state.cycles, action.payload.newCycle],
//             activeCycleId: action.payload.newCycle.id
//         }
//     }

//     if (action.type === "interruptCycle") {
//                 return {
//                     ...state, 
//                     cycles: state.cycles.map((cycle) => {
//                         if (cycle.id === state.activeCycleId) {
//                             return {...cycle, interruptedDate: new Date()}
//                         }
            
//                         else {
//                             return cycle
//                         }
//                     }),
//                     activeCycleId: null
//                 }
//     }

//     if (action.type === "markCycleAsFinished") {
//         return {
//             ...state, 
//             cycles: state.cycles.map((cycle) => {
//                 if (cycle.id === state.activeCycleId) {
//                     return {...cycle, finishedDate: new Date()}
//                 }
    
//                 else {
//                     return cycle
//                 }
//             }),
//             activeCycleId: null
//         }
//     }

// return state

}
