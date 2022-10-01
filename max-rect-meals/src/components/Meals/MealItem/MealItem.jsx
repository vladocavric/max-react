import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.scss';

const MealItem = (props) => {
	const { addItem } = useContext(CartContext);
	const price = `$${parseFloat(props.price).toFixed(2)}`;
	const addToCartHandler = (amount) => {
		addItem({
			id: props.id,
			name: props.name,
			description: props.description,
			price: props.price,
			amount,
		});
	};
	return (
		<li className={classes.meal}>
			<div>
				<h3>{props.name}</h3>
				<div className={classes.description}>{props.description}</div>
				<div className={classes.price}>{price}</div>
			</div>
			<div>
				<MealItemForm id={props.id} onAddToCart={addToCartHandler} />
			</div>
		</li>
	);
};

export default MealItem;
