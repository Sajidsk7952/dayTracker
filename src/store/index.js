import { configureStore } from "@reduxjs/toolkit";
import authReducer from './AuthSlice';
const store = configureStore({
    reducer:{
        auth : authReducer,
        //need to add more reducers
    }
})

export default store;