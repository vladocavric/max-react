import useInput from '../hooks/use-input';
const SimpleInput = (props) => {
	const {
		value: name,
		valueIsValid: nameIsValid,
		inputIsInvalid: nameIsInvalid,
		inputChangeHandler: changeNameInputHandler,
		inputBlueHandler: nameBlueHandler,
		reset: nameReset,
	} = useInput((value) => value.trim() !== '' && value.trim().length > 3);
	const {
		value: email,
		valueIsValid: emailIsValid,
		inputIsInvalid: emailIsInvalid,
		inputChangeHandler: changeEmailInputHandler,
		inputBlueHandler: emailBlueHandler,
		reset: emailReset,
	} = useInput(
		(value) =>
			value.trim() !== '' &&
			value.trim().length > 3 &&
			value.includes('@') &&
			value.includes('.')
	);

	const formIsValid = nameIsValid && emailIsValid;

	const submitFormHandler = (e) => {
		e.preventDefault();
		// nameRef.current.value = '' => not recommended option,
		// here we directly manipulate the dom and that is not recommended with react, just use state with 2 way binding as below
		nameReset();
		emailReset();
	};

	return (
		<form onSubmit={submitFormHandler}>
			<div className={`form-control ${nameIsInvalid ? 'invalid' : ''}`}>
				<label htmlFor='name'>Your Name</label>
				<input
					type='text'
					id='name'
					onChange={changeNameInputHandler}
					onBlur={nameBlueHandler}
					value={name}
				/>
				{nameIsInvalid && (
					<p className='error-text'>
						The name input can not be empty and mut be at list 4
						letters long
					</p>
				)}
			</div>
			<div className={`form-control ${emailIsInvalid ? 'invalid' : ''}`}>
				<label htmlFor='name'>Your Email</label>
				<input
					type='email'
					id='email'
					onChange={changeEmailInputHandler}
					onBlur={emailBlueHandler}
					value={email}
				/>
				{emailIsInvalid && (
					<p className='error-text'>
						You must enter valid email address
					</p>
				)}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
