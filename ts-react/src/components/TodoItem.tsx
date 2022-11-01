import React, { useContext } from 'react';
import TodoContext from '../store/todo-context';
import styles from './TodoItem.module.css';

const TodoItem: React.FC<{
	id: string;
	text: string;
}> = ({ text, id }) => {
  const todoCtx = useContext(TodoContext)
  const onRemoveTodo = todoCtx.removeTodo
	const removeTodoHandler = () => {
		onRemoveTodo(id);
	};
	return (
		<li className={styles.item} onClick={removeTodoHandler}>
			{text}
		</li>
	);
};

export default TodoItem;
