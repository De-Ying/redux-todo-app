import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: "filters",
    initialState: {
        search: "",
        status: "All",
        priorities: [],
    },
    reducers: {
        searchFilterChange: (state, action) =>{
            // mutation
            state.search = action.payload
        }, // => action creators => { type: 'filters/searchFilterChange' }
        statusFilterChange: (state, action) => {
            state.status = action.payload
        },
        prioritiesFilterChange: (state, action) => {
            state.priorities = action.payload
        }
    }
});