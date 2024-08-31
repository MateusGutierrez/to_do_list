import { createSlice } from "@reduxjs/toolkit";
import { ITO_DO } from "./interface";

const INITIAL_STATE = {
    list: [] as ITO_DO[]
}

const toDoSlice = createSlice({
    name: "to_do",
    initialState: INITIAL_STATE,
    reducers: {
        addToDo: (state, action) => {
            state.list.push(action.payload);
        },
        changeStatusToDo: (state, action) => {
            state.list = state.list.map((item) => {
                console.log(action.payload, "payload")
                if (item.id === action.payload.id) {
                    return { ...item, status: action.payload.status };
                }
                return item;
            });
        },
        removeToDo: (state, action) => {
            console.log(action.payload)
            state.list = state.list.filter((item) => item.id !== action.payload);
        }
    }
})

export const { addToDo, removeToDo, changeStatusToDo } = toDoSlice.actions;
export default toDoSlice.reducer;
