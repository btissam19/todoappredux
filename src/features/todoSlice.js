import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[]
}

export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
           const todo={
                id:nanoid(),
                text:action.payload.text,
                completed: false,
            }
            state.todos = [...state.todos, todo];
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload.id)
        
        },
        toggleComplete: (state, action) => {
            const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
            state.todos[index].completed = action.payload.completed;
        },
        
    
    }
})

export const {addTodo,removeTodo,toggleComplete}=todoSlice.actions;
export default todoSlice.reducer;