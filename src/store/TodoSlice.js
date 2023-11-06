
import { createSlice } from "@reduxjs/toolkit";


const todoSlice=createSlice({
    name:'todoSlice',
    initialState:[],
    reducers:{
        addTodos(state,action){
       state.push(action.payload)
        },
        deleteTodo(state,action){
          state.splice(action.payload,1)
        },
           }
})

export default todoSlice;

export const {addTodos,deleteTodo}=todoSlice.actions