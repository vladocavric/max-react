import { useState, useRef } from 'react';
import Popup from 'reactjs-popup';


// import '../../popup.scss'
import Card from '../Card/Card';
import styles from './UserCreateForm.module.scss';

const UserCreateForm = ({onSaveUser}) => {
	const ref = useRef()
	const openTooltip = () => ref.current.open();
	const [username, setUsername] = useState('');
	const [age, setAge] = useState('');
	const [errMsg, setErrMsg] = useState('')

	const changeUsernameHandler = (e) => {
		setUsername(e.target.value);
	};
	const changeAgeHandler = (e) => {
		setAge(e.target.value);
	};
	const submitHandler = (e) => {
		e.preventDefault();
		if(username.trim() === '' || age.trim() === '' ) {
			setErrMsg('Both fields are required')
			openTooltip()
		} else if (parseFloat(age) < 1) {
			setErrMsg('Age needs to be positive number greater than 1')
			openTooltip()
		} else {
			const user = {
				id: Math.floor(Math.random() * 100),
				username,
				age
			}
			onSaveUser(user)
			setUsername('')
			setAge('')
		}
	};

	// const openModal = () => {
	//     setModalOpen(true)
	// }
	return (
		<Card className={styles.UserCreateForm}>
		
			<form onSubmit={submitHandler}>
				<div className='new-user__controls'>
					<div className={styles.input}>
						<label htmlFor='username'>Username</label>
						<input
							type='text'
							id='username'
							onChange={changeUsernameHandler}
							value={username}
						/>
					</div>
					<div className={styles.input}>
						<label htmlFor='age'>Age (Years)</label>
						<input
							type='number'
							id='age'
							onChange={changeAgeHandler}
							value={age}
						/>
					</div>
					<div className={styles.input}>
						<button type='submit'>Add User</button>
					</div>
				</div>
			</form>
			<Popup
				ref={ref}
				className='modal'
				trigger={<button className="button d-none"> Open Modal </button>}
				modal
				// style={{display: 'none'}}
				nested>
				{(close) => (
					<div className='modal'>
						<button className='close' onClick={close}>
							&times;
						</button>
						<div className='header'> Modal Title </div>
						<div className='content'>
							{errMsg}
						</div>
						<div className='actions'>
							<button
								className='button'
								onClick={() => {
									close();
								}}>
								close modal
							</button>
						</div>
					</div>
				)}
			</Popup>
		</Card>
	);
};

export default UserCreateForm;
