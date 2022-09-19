import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.scss';
import CartItem from './CartItem';

const Cart = (props) => {
	const cartItems = [
		{
			id: 'm3',
			name: 'Barbecue Burger',
			description: 'American, raw, meaty',
			price: 12.99,
			amount: 2,
		},
	];
	const cartList = cartItems.map((meal) => (
		<CartItem
			key={meal.id}
			price={meal.price}
			amount={meal.amount}
			name={meal.name}
		/>
	));
	return (
		<Modal>
			<ul className={classes['cart-items']}>{cartList}</ul>
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>35.25</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']}>Cancel</button>
				<button className={classes.button}>order</button>
			</div>
		</Modal>
	);
};

export default Cart;
