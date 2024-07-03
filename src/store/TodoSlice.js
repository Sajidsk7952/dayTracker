import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import firestoreService from "../firebase/firestoreService";
// import { get } from "firebase/database";
const initialTodoState = {
  todos: [],
  notes: "",
  loading: false,
  error: null,
};
export const saveTask = createAsyncThunk(
  "todo/saveTodo",
  async (uid, { getState, rejectWithValue }) => {
    const state = getState();
    // console.log(state.todo);
    const res = await firestoreService.addTask(uid, state.todo);
    if (!res.success) {
      return rejectWithValue(res.data);
    }
    return res.data;
  }
);
const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodoState,
  reducers: {
    addTask: (state, action) => {
      state.loading = false;
      state.error = null;
      state.todos = [...state.todos, action.payload];
    },
    completeTask: (state, action) => {
      state.loading = false;
      state.error = null;
      const task = state.todos.find((todo) => todo.id === action.payload.id);
      if (!task.completed) {
        task.completedAt = Date.now();
      } else {
        task.completedAt = null;
      }
      task.completed = !task.completed;
    },
    deleteTask: (state, action) => {
      state.loading = false;
      state.error = null;
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    setNotes: (state, action) => {
      // console.log(action.payload);
      state.loading = false;
      state.error = null;
      state.notes = action.payload;
      // console.log(state.notes);
    },
    addTodo: (state, action) => {
      state.error = action.payload.error;
      state.loading = action.payload.loading;
      state.notes = action.payload.notes;
      state.todos = action.payload.todos;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(saveTask.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(saveTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { addTask, completeTask, deleteTask, setNotes, addTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
