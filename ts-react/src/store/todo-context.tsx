import React, { useState, useEffect } from 'react';
import Todo from '../models/todo'

const TodoContext = React.createContext({
    todos: [],
    addTodo: (todo: Todo) => {},
    removeTodo: (id: string) => {}
})

export const TodoContextProvider: React.FC<AuxProps> = (props) => {
    const [todos, setTodos] = useState<Todo[]>([])

    const addTodoHandler = (todo: Todo) => {
        setTodos(prevState => {
            return [...prevState, todo]
          })
    }

    const removeTodoHandler = (id: string) => {
        const updatedTodos = todos.filter(todo => todo.id !== id)
        setTodos(updatedTodos)
    }

    return(
        <TodoContext.Provider 
        value={{
            todos: ,
            addTodo: addTodoHandler,
            removeTodo: removeTodoHandler
        }}
        >{props.children}</TodoContext.Provider>
    )
}

export default TodoContext