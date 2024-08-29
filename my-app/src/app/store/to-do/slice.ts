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
        toggleToDo: (state, action) => {
            state.list = state.list.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            });
        },
        removeToDo: (state, action) => {
            state.list = state.list.filter((item) => item.id !== action.payload);
        }
    }
})

export const { addToDo, removeToDo, toggleToDo } = toDoSlice.actions;
export default toDoSlice.reducer;
