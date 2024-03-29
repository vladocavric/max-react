import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { authActions } from '../../store/auth-slice';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
	const onLogoutHandler = () => {
		console.log(isLoggedIn);
    dispatch(authActions.logout())
	};
	return (
		<header className={classes.header}>
			<Link to='/'>
				<div className={classes.logo}>React Auth</div>
			</Link>
			<nav>
				<ul>
					{!isLoggedIn && (
						<li>
							<Link to='/auth'>Login</Link>
						</li>
					)}
					{isLoggedIn &&
						<>
							<li>
								<Link to='/profile'>Profile</Link>
							</li>
							<li>
								<button onClick={onLogoutHandler}>
									Logout
								</button>
							</li>
						</>
					}
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
