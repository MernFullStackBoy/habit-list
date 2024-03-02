import { useState } from 'react'

function TodoForm({ addTodo }) {
    const [value, setValue] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        addTodo(value)

        setValue("")
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input value={value} type="text" className='todo-input' placeholder='What is the task today ?' onChange={(e) => setValue(e.target.value)} />
            <button type='submit' className='todo-btn'>Add task</button>
        </form>
    )
}

export default TodoForm