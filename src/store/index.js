import { configureStore } from "@reduxjs/toolkit";
import authReducer from './AuthSlice';
import TodoSlice from "./TodoSlice";
const store = configureStore({
    reducer:{
        auth : authReducer,
        todo : TodoSlice,
        //need to add more reducers
    }
})

export default store;