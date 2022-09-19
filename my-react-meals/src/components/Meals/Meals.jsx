
import Card from '../UI/Card/Card';
import DummyMeals from '../../dummy-meals';

import MealItem from './MealItem';
import styles from './Meals.module.scss';



const Meals = () => {
	
	return (
		<Card className={styles.meals}>
			<ul>
				{DummyMeals.map((meal) => {
					return <MealItem meal={meal} key={meal.id} />;
				})}
			</ul>
		</Card>
	);
};

export default Meals;
