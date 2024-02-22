import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: "todoList",
    initialState: { status: "idle", todos: [] }, // [] => { status: '', todos: [] }
    reducers: {
        addTodo: (state, action) => {
            // mutation
            state.push(action.payload);
        }, // => { type: 'todoList/addTodo' }
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find(
                (todo) => todo.id === action.payload
            );
            currentTodo.completed = !currentTodo.completed;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todos = action.payload;
                state.status = "idle";
            })
            .addCase(addNewTodo.fulfilled, (state, action) => {
                state.todos.push(action.payload);
            }).addCase(updateTodo.fulfilled, (state, action) => {
                let currentTodo = state.todos.find(
                    (todo) => todo.id === action.payload
                );
                currentTodo = action.payload;
            });
    },
});

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
    const res = await fetch("/api/todos");
    const data = await res.json();
    return data.todos;
});

export const addNewTodo = createAsyncThunk(
    "todos/addNewTodo",
    async (newTodo) => {
        const res = await fetch("/api/todos", {
            method: "POST",
            body: JSON.stringify(newTodo),
        });
        const data = await res.json();
        return data.todos;
    }
);

export const updateTodo = createAsyncThunk(
    "todos/updateTodo",
    async (updateTodo) => {
        const res = await fetch("/api/updateTodo", {
            method: "POST",
            body: JSON.stringify(updateTodo),
        });
        const data = await res.json();
        console.log('[UpdateTodo: ]', {data});
        return data.todos;
    }
);

export default todosSlice;

// action (object) và action creators () => { return action }
// thunk action (function) và thunk action creators () => { return thunk action }
