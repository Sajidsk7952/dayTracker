import { createSlice } from "@reduxjs/toolkit"

const initailTaskState = {
    tasks : [],
    error: null,
    loading: false,
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState: initailTaskState,
    reducers : {},
})