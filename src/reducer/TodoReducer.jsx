import { v4 as uuid } from "uuid"

const TodoReducer = (state, { type, payload }) => {
    switch (type) {
        case "ADD_TODO":
            return { ...state, todoList: [...state.todoList, { id: uuid(), task: payload, isComplete: false }] }
        case "TODO_STATUS":
            return { ...state, todoList: state.todoList.map(item => payload.id === item.id ? { ...item, isComplete: !item.isComplete } : item) }
        case "TODO_DELETE":
            return { ...state, todoList: state.todoList.filter(item => item.id !== payload) }
        default:
            return state;
    }
}
export { TodoReducer }