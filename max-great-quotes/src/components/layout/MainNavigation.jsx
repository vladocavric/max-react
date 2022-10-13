import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';
const MainNavigation = () => {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>Great Quotes</div>
			<div className={classes.nav}>
				<ul>
					<li>
						<NavLink to='/quotes' activeClassName={classes.active} exact>
							All Quotes
						</NavLink>
					</li>
					<li>
						<NavLink to='/quotes/new' activeClassName={classes.active}>
							New Quote
						</NavLink>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default MainNavigation;
