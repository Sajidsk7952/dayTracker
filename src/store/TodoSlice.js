import { createSlice } from "@reduxjs/toolkit";
const initialTodoState = {
  todos: [],
  notes : "",
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodoState,
  reducers: {
    addTask: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    completeTask: (state, action) => {
      const task = state.todos.find((todo) => todo.id === action.payload.id);
      if (!task.completed) {
        task.completedAt = Date.now();
      } else {
        task.completedAt = null;
      }
      task.completed = !task.completed;
    },
    deleteTask: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    setNotes: (state,action) => {
      state.notes = action.payload;
    },
    addTodo: (state,action)=>{
      state.error = action.payload.error;
      state.loading = action.payload.loading;
      state.notes = action.payload.notes;
      state.todos = action.payload.todos;
    }
  },
});
export const { addTask, completeTask, deleteTask,setNotes,addTodo } = todoSlice.actions;
export default todoSlice.reducer;
