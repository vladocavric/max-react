import styles from './Header.module.scss';
import mealsImg from '../../assets/images/meals.jpg';
import HeaderCartButton from './HeaderCartButton/HeaderCartButton';
const Header = () => {
	return (
		<>
			<div className={styles.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton />
			</div>
			<div className={styles.mainImage}>
				<img src={mealsImg} alt='meals' />
			</div>
		</>
	);
};

export default Header;
