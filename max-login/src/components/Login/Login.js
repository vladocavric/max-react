import React, {
	useState,
	useEffect,
	useReducer,
	useContext,
	useRef,
} from 'react';

import emailReducer from '../../reducers/emailReducer';
import passwordReducer from '../../reducers/passwordReducer';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import AuthContext from '../../store/auth-context';

const Login = () => {
	const emailInputRef = useRef();
	const passwordInputRef = useRef();
	// const [enteredEmail, setEnteredEmail] = useState('');
	// const [emailIsValid, setEmailIsValid] = useState();
	// const [enteredPassword, setEnteredPassword] = useState('');
	// const [passwordIsValid, setPasswordIsValid] = useState();
	const [formIsValid, setFormIsValid] = useState(false);

	const [stateEmail, dispatchEmail] = useReducer(emailReducer, {
		value: '',
		isValid: null,
	});

	const [statePassword, dispatchPassword] = useReducer(passwordReducer, {
		value: '',
		isValid: null,
	});

	const { onLogin } = useContext(AuthContext);

	const { isValid: emailIsValid } = stateEmail;
	const { isValid: passwordIsValid } = statePassword;

	useEffect(() => {
		emailInputRef.current.focus();
	}, []);

	useEffect(() => {
		const identifier = setTimeout(() => {
			console.log('run validation');
			setFormIsValid(emailIsValid && passwordIsValid);
		}, 500);

		return () => {
			console.log('CLEANING UP');
			clearTimeout(identifier);
		};
	}, [emailIsValid, passwordIsValid]);

	const emailChangeHandler = (event) => {
		// setEnteredEmail(event.target.value);
		dispatchEmail({ type: 'EMAIL_INPUT', value: event.target.value });

		// setFormIsValid(
		//   event.target.value.includes('@') && enteredPassword.trim().length > 2
		// );
	};

	const passwordChangeHandler = (event) => {
		// setEnteredPassword(event.target.value);
		dispatchPassword({ type: 'PASSWORD_INPUT', value: event.target.value });

		// setFormIsValid(
		//   event.target.value.trim().length > 6 && enteredEmail.includes('@')
		// );
	};

	const validateEmailHandler = () => {
		// setEmailIsValid(enteredEmail.includes('@'));
		dispatchEmail({ type: 'EMAIL_BLUR' });
	};

	const validatePasswordHandler = () => {
		// setPasswordIsValid(enteredPassword.trim().length > 2);
		dispatchPassword({ type: 'PASSWORD_BLUR' });
	};

	const submitHandler = (event) => {
		event.preventDefault();
		if (formIsValid) {
			onLogin(stateEmail.value, statePassword.value);
		} else if (!emailIsValid) {
			emailInputRef.current.focus();
		} else {
			passwordInputRef.current.focus();
		}
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				{/* <div
					className={`${classes.control} ${
						stateEmail.isValid === false ? classes.invalid : ''
					}`}>
					<label htmlFor='email'>E-Mail</label>
					<input
						type='email'
						id='email'
						value={stateEmail.value}
						onChange={emailChangeHandler}
						onBlur={validateEmailHandler}
						autoComplete='on'
					/>
				</div> */}
				<Input
					ref={emailInputRef}
					isInvalid={stateEmail.isValid === false ? 'invalid' : ''}
					id='email'
					label='Email'
					type='email'
					value={stateEmail.value}
					onChange={emailChangeHandler}
					onBlur={validateEmailHandler}
				/>
				{/* <div
					className={`${classes.control} ${
						statePassword.isValid === false ? classes.invalid : ''
					}`}>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						id='password'
						value={statePassword.value}
						onChange={passwordChangeHandler}
						onBlur={validatePasswordHandler}
						autoComplete='on'
					/>
				</div> */}
				<Input
					ref={passwordInputRef}
					isInvalid={statePassword.isValid === false ? 'invalid' : ''}
					id='password'
					label='Password'
					type='password'
					value={statePassword.value}
					onChange={passwordChangeHandler}
					onBlur={validatePasswordHandler}
				/>
				<div className={classes.actions}>
					<Button type='submit' className={classes.btn}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
