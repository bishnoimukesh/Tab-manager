import React, { useState } from 'react'
import { useTodo } from "../../context/todo-context"
import './Todo.css';

const TodoModal = ({ setShowModal }) => {
    const [todo, setTodo] = useState("");
    const { todoList, addTodoHandler, todoCheckHandler, deleteTodoHandler } = useTodo();

    const keyDownHandler = (e) => {
        if (e.key === "Enter") {
            handleAddTodo();
        }
    }

    const handleAddTodo = () => {
        if (todo.trim() !== "") {
            addTodoHandler(todo);
            setTodo("");
        }
    }
    const checkboxHandler = (todo) => {
        todoCheckHandler(todo)
    }

    const deleteHandler = (id) => {
        deleteTodoHandler(id)
    }
    return (
        <>
            <div className="todo-modal-overlay" onClick={() => setShowModal(false)} />
            <div className='todo-modal todo-modal-animate'>
                <div className='todo-title'>
                    <p style={{ fontWeight: 'bold', fontSize: '1.5rem', margin: 0, letterSpacing: '1px' }}>📝 Todo List</p>
                    <button className="close-btn"
                        onClick={() => setShowModal(false)}
                        aria-label="Close">
                        <span >
                            <i className="fa-solid fa-xmark"></i>
                        </span>
                    </button>
                </div>
                <div className='todo-list-section'>
                    {todoList.length === 0 && (
                        <div className="empty-todo">
                            <i className="fa-regular fa-face-smile-beam" style={{fontSize: '2rem', color: '#bdbdbd'}}></i>
                            <p style={{margin: '0.5rem 0 0 0'}}>No todos yet! Add your first one below.</p>
                        </div>
                    )}
                    {todoList.map(todo =>
                        <div className={`todo-item${todo.isComplete ? " selected" : ""}`} key={todo.id}>
                            <label className={`todo-label ${todo.isComplete ? "line-through" : ""}`}>
                                <input type="checkbox"
                                    checked={todo?.isComplete} onChange={() => checkboxHandler(todo)} />
                                <span>{todo.task}</span>
                            </label>
                            <button className="remove-btn" title="Delete" onClick={() => deleteHandler(todo.id)}>
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </div>)}
                </div>
                <div className="todo-input-row">
                    <input
                        type="text"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                        onKeyDown={keyDownHandler}
                        placeholder="Add a new todo..."
                        className="todo-input"
                        autoFocus
                    />
                    <button className="add-btn" onClick={handleAddTodo} title="Add Todo" disabled={todo.trim() === ""}>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export { TodoModal }