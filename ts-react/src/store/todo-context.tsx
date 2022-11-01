import React, { useState } from 'react';
import Todo from '../models/todo';

type TodoContextObj = {
	todos: Todo[];
	addTodo: (todo: Todo) => void;
	removeTodo: (id: string) => void;
};

const TodoContext = React.createContext<TodoContextObj>({
	todos: [],
	addTodo: (todo: Todo) => {},
	removeTodo: (id: string) => {},
});

export const TodoContextProvider: React.FC<{ children: React.ReactNode }> = (
	props
) => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodoHandler = (todo: Todo) => {
		setTodos((prevState) => {
			return [...prevState, todo];
		});
	};

	const removeTodoHandler = (id: string) => {
		const updatedTodos = todos.filter((todo) => todo.id !== id);
		setTodos(updatedTodos);
	};

	const value: TodoContextObj = {
		todos,
		addTodo: addTodoHandler,
		removeTodo: removeTodoHandler,
	};

	return (
		<TodoContext.Provider
			value={value}>
			{props.children}
		</TodoContext.Provider>
	);
};

export default TodoContext;
