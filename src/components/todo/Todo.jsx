import React, { useState } from 'react'
import { TodoModal } from './TodoModal'
const Todo = () => {
    const [showModal, setShowModal] = useState("")
    return (
        <div>
            {showModal && <TodoModal setShowModal={setShowModal} />}
            <button
                className='font-bold'
                onClick={() => setShowModal(pre => !pre)}>Todo</button>
        </div>
    )
}

export { Todo }