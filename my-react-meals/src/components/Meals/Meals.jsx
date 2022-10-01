import {useContext } from 'react';
// import useHttp from '../../hooks/use-http';
import Card from '../UI/Card/Card';
import Loader from '../UI/Loader/Loader';
import OrderContext from '../../store/order-context';

import MealItem from './MealItem';
import styles from './Meals.module.scss';



const Meals = () => {
	const { meals, isLoading, error } = useContext(OrderContext);
	// const [meals, setMeals] = useState([])
	// const { isLoading, error, sendRequest: getMealsRequest } = useHttp();

	// useEffect(() => {
	// 	const convertData = (data) => {
	// 		const loadedMeals = [];

	// 		for (const mealKey in data) {
	// 			loadedMeals.push({ id: mealKey, ...data[mealKey] });
	// 		}

	// 		// setMeals(loadedMeals);
	// 	};

	// 	getMealsRequest(
	// 		{
	// 			url: 'https://max-react-8c77c-default-rtdb.firebaseio.com/meals.json',
	// 		},
	// 		convertData
	// 	)

	// }, [getMealsRequest])
	
	return (
		<Card className={`${styles.meals} ${isLoading || error ?  styles.loading : ''}`}>
			{error}
			{isLoading && <Loader />}
			<ul>
				{meals.map((meal) => {
					return <MealItem meal={meal} key={meal.id} />;
				})}
			</ul>
		</Card>
	);
};

export default Meals;
