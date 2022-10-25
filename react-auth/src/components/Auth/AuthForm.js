import { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import classes from './AuthForm.module.css';

const AuthForm = () => {
	const [isLogin, setIsLogin] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const email = useRef();
	const password = useRef();
	const { login } = useContext(AuthContext);
	const history = useHistory();

	const switchAuthModeHandler = () => {
		setIsLogin((prevState) => !prevState);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const enteredEmail = email.current.value;
		const enteredPassword = password.current.value;
		setIsLoading(true);
		let url = '';
		if (isLogin) {
			url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`;
		} else {
			url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY}`;
		}

		fetch(url, {
			method: 'POST',
			body: JSON.stringify({
				email: enteredEmail,
				password: enteredPassword,
				returnSecureToken: true,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => {
				setIsLoading(false);
				if (res.ok) {
					return res.json();
				} else {
					return res.json().then((data) => {
						let errorMessage = 'Registration failed';
						if (data.error.message) {
							errorMessage = data.error.message;
						}
						throw new Error(errorMessage);
					});
				}
			})
			.then((data) => {
				const expirationInMilSeconds = +data.expiresIn * 1000;
				login(data.idToken, expirationInMilSeconds);
				history.replace('/');
			})
			.catch((e) => {
				alert(e);
			});
	};

	return (
		<section className={classes.auth}>
			<h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
			<form onSubmit={handleSubmit}>
				<div className={classes.control}>
					<label htmlFor='email'>Your Email</label>
					<input
						type='email'
						id='email'
						autoComplete='on'
						required
						ref={email}
					/>
				</div>
				<div className={classes.control}>
					<label htmlFor='password'>Your Password</label>
					<input
						type='password'
						id='password'
						required
						ref={password}
					/>
				</div>
				<div className={classes.actions}>
					{!isLoading && (
						<button>{isLogin ? 'Login' : 'Create Account'}</button>
					)}
					{isLoading && <p>Loading...</p>}
					<button
						type='button'
						className={classes.toggle}
						onClick={switchAuthModeHandler}>
						{isLogin
							? 'Create new account'
							: 'Login with existing account'}
					</button>
				</div>
			</form>
		</section>
	);
};

export default AuthForm;
