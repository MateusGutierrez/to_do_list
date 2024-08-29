import { ToDoTypes } from "./action-types"
import { ACTION, ITO_DO } from "./interface"

const INITIAL_STATE = {
    list: [] as ITO_DO[]
}

export const reducer = (state = INITIAL_STATE, action: ACTION) => {
   switch (action.type) {
    case ToDoTypes.ADD_TO_DO: 
       return {...state, list: [...state.list, action.payload]}
    case ToDoTypes.TOGGLE_COMPLETE_TO_DO:
        const mappedList = state.list.map((item) => {
            if (item.id === action.payload){
                item.completed = !item.completed 
            }
        })
        return {...state, list: mappedList}
    case ToDoTypes.REMOVE_TO_DO:
        const filteredList = state.list.filter((item) => item.id !== action.payload)
        return {...state, list: filteredList}
    default:
        return state
   }
}
