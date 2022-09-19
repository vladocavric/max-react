import { useContext } from 'react';
import OrderContext from '../../store/order-context';
import classes from './CartItem.module.scss';

const CartItem = (props) => {
	const { onAdd, onRemove } = useContext(OrderContext);
	const price = `$${props.price.toFixed(2)}`;

	const handleOnAdd = () => {
		onAdd(props.id)
	}

	const handleOnRemove = () => {
		onRemove(props.id)
	}

	return (
		<li className={classes['cart-item']}>
			<div>
				<h2>{props.name}</h2>
				<div className={classes.summary}>
					<span className={classes.price}>{price}</span>
					<span className={classes.amount}>x {props.amount}</span>
				</div>
			</div>
			<div className={classes.actions}>
				<button onClick={handleOnRemove}>−</button>
				<button onClick={handleOnAdd}>+</button>
			</div>
		</li>
	);
};

export default CartItem;
