import { useState } from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from "uuid"
import Todo from './Todo'
import EditTodoForm from './EditTodoForm'

function TodoWrapper() {
    const [todos, setTodos] = useState([])
    function addTodo(todo) {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
    }

    function toggleComplete(id) {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }


    function deleteTodo(id) {
        setTodos(prev => prev.filter(item => {
            return item.id !== id
        }))
    }

    function editTodo(id) {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }


    function editTask(task, id) {
        setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
    }

    return (
        <div className='TodoWrapper'>
            <h1>Get Things Done</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm task={todo} editTodo={editTask} />
                ) : (
                    <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
                )
            ))}
        </div>
    )
}

export default TodoWrapper