// import { useState } from 'react';
import useHttp from '../hooks/use-http';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
	const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

	const handleData = (taskText, data) => {
		const generatedId = data.name; // firebase-specific => "name" contains generated id
		const createdTask = { id: generatedId, text: taskText };

		props.onAddTask(createdTask);
	};
	const enterTaskHandler = (taskText) => {
		// const handleData = (data) => {
		// 	const generatedId = data.name; // firebase-specific => "name" contains generated id
		// 	const createdTask = { id: generatedId, text: taskText };

		// 	props.onAddTask(createdTask);
		// };
		sendTaskRequest(
			{
				url: 'https://max-react-8c77c-default-rtdb.firebaseio.com/tasks.json',
				method: 'POST',
				body: { text: taskText },
				headers: {
					'Content-Type': 'application/json',
				},
			},
			handleData.bind(null, taskText)
		);
	};

	return (
		<Section>
			<TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
			{error && <p>{error}</p>}
		</Section>
	);
};

export default NewTask;
