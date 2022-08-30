import { useState, useRef } from 'react';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import Modal from '../UI/Modal/Modal';
import styles from './AddUser.module.css';

const AddUser = ({ onAddUser }) => {
	const enteredUsername = useRef()
	const enteredAge = useRef()
	const addUserForm = useRef()
	// const [enteredUsername, setEnteredUsername] = useState('');
	// const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState();
	const onSubmitHandler = (e) => {
		e.preventDefault();
		let username = enteredUsername.current.value
		let age = enteredAge.current.value
		if (
			username.trim().length === 0 ||
			age.trim().length === 0
		) {
			setError({
				title: 'Both fields are required',
				message: 'Please enter valid values',
			});
			return;
		}

		if (+age < 1) {
			setError({
				title: 'Age must be positive number',
				message: 'Please enter valid value for age',
			});
			return;
		}
		onAddUser(username, age);
		// setEnteredUsername('');
		// setEnteredAge('');

		// enteredUsername.current.value = ''
		// enteredAge.current.value = ''
		enteredAge.current.blur()
		addUserForm.current.reset()
	};

	// const onUsernameChangeHandler = (e) => {
	// 	setEnteredUsername(e.target.value);
	// };

	// const onAgeChangeHandler = (e) => {
	// 	setEnteredAge(e.target.value);
	// };

	const errorHandler = () => {
		setError(null);
	};
	return (
		<>
			{error && (
				<Modal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}></Modal>
			)}
			<Card className={styles.input}>
				<form onSubmit={onSubmitHandler} ref={addUserForm}>
					<label htmlFor='username'>Username</label>
					<input
						type='text'
						id='username'
						// value={enteredUsername}
						// onChange={onUsernameChangeHandler}
						ref={enteredUsername}
					/>
					<label htmlFor='Age'>Age</label>
					<input
						type='number'
						id='Age'
						// step="1"
						// min="1"
						// value={enteredAge}
						// onChange={onAgeChangeHandler}
						ref={enteredAge}
					/>
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</>
	);
};

export default AddUser;
