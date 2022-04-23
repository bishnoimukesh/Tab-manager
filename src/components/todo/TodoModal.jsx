import React, { useState } from 'react'
import { useTodo } from "../../context/todo-context"
import './Todo.css';

const TodoModal = ({ setShowModal }) => {
    const [todo, setTodo] = useState("");
    const { todoList, addTodoHandler, todoCheckHandler, deleteTodoHandler } = useTodo();

    const keyDownHandler = (e) => {
        if (e.key === "Enter") {
            addTodoHandler(todo)
            setTodo("")
        }
    }
    const checkboxHandler = (todo) => {
        todoCheckHandler(todo)
    }

    const deleteHandler = (id) => {
        deleteTodoHandler(id)
    }
    return (
        <div className='todo-modal'>
            <div className='todo-title'>
                <p>Todo</p>
                <button className="close-btn"
                    onClick={() => setShowModal(false)}>
                    <span >
                        <i class="fa-solid fa-xmark"></i>
                    </span>
                </button>
            </div>
            <div className=''>
                {todoList.map(todo =>
                    <div>
                        <label className={`${todo.isComplete && "line-through"}`}>
                            <input type="checkbox"
                                checked={todo?.isComplete} onChange={() => checkboxHandler(todo)}/>
                            {todo.task}
                        </label>
                        <button className="remove-btn" onClick={() => deleteHandler(todo.id)}>
                                <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>)}
            </div>
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                onKeyDown={keyDownHandler}
                placeholder="Enter Todo"
                className=""/>
        </div>
    )
}

export { TodoModal }