import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.scss';
import meals from '../../assets/meals.jpg';

const Header = ({ onShow }) => {
	return (
		<>
			<header className={classes.header}>
				<h1>React Meals</h1>
				<HeaderCartButton onClick={onShow} />
			</header>
			<div className={classes['main-image']}>
				<img src={meals} alt='table with food' />
			</div>
		</>
	);
};

export default Header;
