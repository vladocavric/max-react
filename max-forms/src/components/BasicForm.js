
import useInput from '../hook/use-input';
import isEmail from 'validator/lib/isEmail';
const isNotEmpty = (value) => value.trim() !== '';
const BasicForm = (props) => {
	const {
		value: fName,
		inputIsValid: fNameIsValid,
		inputIsInvalid: fNameIsInvalid,
		inputChangeHandler: fNameChangeHandler,
		inputBlurHandler: fNameBlurHandler,
		reset: fNameReset
	} = useInput(isNotEmpty);
	const {
		value: lName,
		inputIsValid: lNameIsValid,
		inputIsInvalid: lNameIsInvalid,
		inputChangeHandler: lNameChangeHandler,
		inputBlurHandler: lNameBlurHandler,
		reset: lNameReset
	} = useInput(isNotEmpty);
	const {
		value: email,
		inputIsValid: emailIsValid,
		inputIsInvalid: emailIsInvalid,
		inputChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: emailReset
	} = useInput((value) => isEmail(value));

	const fromIsValid = fNameIsValid && lNameIsValid && emailIsValid;
	const submitHandler = e => {
		e.preventDefault()
		if(!fromIsValid) {
			return
		}
		
		console.log(fName, lName, email)

		fNameReset()
		lNameReset()
		emailReset()
	}
	return (
		<form onSubmit={submitHandler}>
			<div className='control-group'>
				<div className='form-control'>
					<label htmlFor='fName'>First Name</label>
					<input
						type='text'
						id='fName'
						onChange={fNameChangeHandler}
						onBlur={fNameBlurHandler}
						value={fName}
					/>
					{fNameIsInvalid && (
						<p className='error-text'>
							First Name must be provided
						</p>
					)}
				</div>
				<div className='form-control'>
					<label htmlFor='lName'>Last Name</label>
					<input
						type='text'
						id='lName'
						onChange={lNameChangeHandler}
						onBlur={lNameBlurHandler}
						value={lName}
					/>
					{lNameIsInvalid && (
						<p className='error-text'>Last Name must be provided</p>
					)}
				</div>
			</div>
			<div className='form-control'>
				<label htmlFor='email'>E-Mail Address</label>
				<input
					type='text'
					id='email'
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
					value={email}
				/>
				{emailIsInvalid && (
					<p className='error-text'>
						You must provide valid email addresse
					</p>
				)}
			</div>
			<div className='form-actions'>
				<button disabled={!fromIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
