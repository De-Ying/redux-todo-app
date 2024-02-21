import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: "todoList",
    initialState: [
        {
            id: 1,
            name: "Learn Yoga",
            completed: false,
            priority: "Medium",
        },
        {
            id: 2,
            name: "Learn Redux",
            completed: true,
            priority: "High",
        },
        {
            id: 3,
            name: "Learn React",
            completed: false,
            priority: "Low",
        },
    ],
    reducers: {
        addTodo: (state, action) => {
            // mutation
            state.push(action.payload);
        }, // => { type: 'filters/searchFilterChange' }
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find(
                (todo) => todo.id === action.payload
            );
            currentTodo.completed = !currentTodo.completed;
        },
    },
});
