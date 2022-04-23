import { useEffect, createContext, useContext, useReducer } from "react";
import { TodoReducer } from "../reducer/TodoReducer.jsx";
const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TodoReducer, { todoList: localStorage.getItem("todolist") ? JSON.parse(localStorage.getItem("todolist")) : [] });
    const { todoList } = state;

    useEffect(() => {
        localStorage.setItem("todolist", JSON.stringify(todoList))
    })

    const addTodoHandler = (todo) => {
        dispatch({ type: "ADD_TODO", payload: todo })
    }

    const todoCheckHandler = (todo) => {
        dispatch({ type: "TODO_STATUS", payload: todo })
    }
    const deleteTodoHandler = (id) => {
        dispatch({ type: "TODO_DELETE", payload: id })
    }

    return (
        <TodoContext.Provider value={{ todoList, dispatch, addTodoHandler, todoCheckHandler, deleteTodoHandler }}>
            {children}
        </TodoContext.Provider>
    )
}

const useTodo = () => useContext(TodoContext)

export { TodoProvider, useTodo }