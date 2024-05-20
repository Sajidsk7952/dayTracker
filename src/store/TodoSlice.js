import { createSlice } from "@reduxjs/toolkit";
const initialTodoState = {
    todos : [],
    loading : false,
    error: null,
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialTodoState,
    
    reducers: {
        
    }
})