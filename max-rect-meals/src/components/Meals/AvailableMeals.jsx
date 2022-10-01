import { useEffect, useState } from 'react';
import classes from './AvailableMeals.module.scss';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';

const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState();
	useEffect(() => {
		setIsLoading(true);
		const fetchMeals = async () => {
			const response = await fetch(
				'https://max-react-8c77c-default-rtdb.firebaseio.com/meals.json'
			);
			if (!response.ok) {
				throw new Error('Something went wrong');
			}
			const data = await response.json();
			const mealsArr = [];
			for (let key in data) {
				mealsArr.push({ id: key, ...data[key] });
			}
			setMeals(mealsArr);
			setIsLoading(false);
		};
		fetchMeals().catch((e) => {
			setIsLoading(false);
			setHttpError(e.message);
		});
	}, []);
	if (isLoading) {
		return (
			<section className={classes.MealsLoading}>
				<p>Loading...</p>
			</section>
		);
	}

	if (httpError) {
		return (
			<section className={classes.MealsError}>
				<p>{httpError}</p>
			</section>
		);
	}
	const mealsList = meals.map((meal) => (
		<MealItem
			key={meal.id}
			id={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
		/>
	));

	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
