import React, { useRef, useContext} from 'react'
import TodoContext from '../store/todo-context'
import styles from './NewTodo.module.css'
import Todo from '../models/todo'

const NewTodo: React.FC = () => {
    const {addTodo: onAddNewTodo} = useContext(TodoContext)
    const todoText = useRef<HTMLInputElement>(null)
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        const enteredText = todoText.current!.value
        const newTodo = new Todo(enteredText)

        if(enteredText.trim().length === 0) {
            return
        }
        onAddNewTodo(newTodo)
        todoText.current!.value = ''
    }
  return (
    <form onSubmit={submitHandler} className={styles.form}>
        <label htmlFor='text'>Todo text</label>
        <input type="text" id='text' ref={todoText} />
        <button>Add Todo</button>
    </form>
  )
}

export default NewTodo
