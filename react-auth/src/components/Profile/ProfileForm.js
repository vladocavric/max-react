import { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
	const { token, login } = useContext(AuthContext);
	const password = useRef();
	const history = useHistory();
	const submitHandler = (e) => {
		e.preventDefault();
		const enteredPassword = password.current.value;
		fetch(
			`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_API_KEY}`,
			{
				method: 'POST',
				body: JSON.stringify({
					idToken: token,
					password: enteredPassword,
					returnSecureToken: true,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					return res.json().then((data) => {
						let errorMessage = 'Change Password failed failed';
						if (data.error.message) {
							errorMessage = data.error.message;
						}
						throw new Error(errorMessage);
					});
				}
			})
			.then((data) => {
				login(data.idToken);
				history.push('/');
			})
			.catch((e) => {
				console.log(e);
			});
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<div className={classes.control}>
				<label htmlFor='new-password'>New Password</label>
				<input type='password' id='new-password' ref={password} />
			</div>
			<div className={classes.action}>
				<button>Change Password</button>
			</div>
		</form>
	);
};

export default ProfileForm;
