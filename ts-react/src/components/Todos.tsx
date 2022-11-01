import React, {useContext} from 'react';
import Todo from '../models/todo'
import  TodoItem  from "./TodoItem";

import styles from './Todos.module.css'
import TodoContext from '../store/todo-context';


const Todos: React.FC = () => {
	const todoCtx = useContext(TodoContext)
	const todos: Todo[] = todoCtx.todos
	return (
		<ul className={styles.todos} >
			{todos.map(item => <TodoItem key={item.id} text={item.text}id={item.id} />)}
		</ul>
	);
};

export default Todos;
