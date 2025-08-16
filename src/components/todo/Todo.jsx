import { useState } from 'react'
import { TodoModal } from './TodoModal'
const Todo = () => {
    const [showModal, setShowModal] = useState("")
    return (
        <div>
            <button
                className='todo-main-btn'
                onClick={() => setShowModal(true)}>
                <i className="fa-solid fa-list-check"></i>
                Todo
            </button>
            {showModal && <TodoModal setShowModal={setShowModal} />}
        </div>
    )
}

export { Todo }