import { combineReducers } from "redux";

import FiltersReducer from "../components/Filters/filtersSlice";
import TodoListReducer from "../components/TodoList/todoListSlice";

// Features: Split Reducer

// Content: Khi rootReducer được gọi, mỗi reducer con sẽ được gọi với một phần của state tương ứng và action tương ứng.

// C1:
// const rootReducer = (state = {}, action) => {
//     return {
//         filters: FiltersReducer(state.filters, action),
//         todoList: TodoListReducer(state.todoList, action)
//     }
// };

// C2: 
const rootReducer = combineReducers({
    filters: FiltersReducer,
    todoList: TodoListReducer
})

export default rootReducer;