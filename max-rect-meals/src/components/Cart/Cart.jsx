import { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.scss';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = ({ onClose }) => {
	const [showOrderConfirm, setShowOrderConfirm] = useState(false);
	const [isOrdering, setIsOrdering] = useState(false);
	const [didOrder, setDidOrder] = useState(false);
	const { items, totalAmount, addItem, removeItem, clearCart } =
		useContext(CartContext);

	const handleRemoveItem = (id) => {
		removeItem(id);
	};
	const handleAddItem = (item) => {
		addItem({ ...item, amount: 1 });
	};

	const handleOrder = () => {
		setShowOrderConfirm(true);
	};

	const submitOrder = async (userData) => {
		setIsOrdering(true);
		const response = await fetch(
			'https://max-react-8c77c-default-rtdb.firebaseio.com/orders.json',
			{
				method: 'POST',
				body: JSON.stringify({
					user: userData,
					items,
				}),
			}
		);
		setIsOrdering(false);
		setDidOrder(true);
		clearCart();
	};

	const orderActions = (
		<div className={classes.actions}>
			<button className={classes['button--alt']} onClick={onClose}>
				Cancel
			</button>
			{!!items.length && (
				<button className={classes.button} onClick={handleOrder}>
					Order
				</button>
			)}
		</div>
	);

	const cartList = items.map((item) => (
		<CartItem
			key={item.id}
			price={item.price}
			amount={item.amount}
			name={item.name}
			onRemove={handleRemoveItem.bind(null, item.id)}
			onAdd={handleAddItem.bind(null, item)}
		/>
	));

	const modalContent = (
		<>
			<ul className={classes['cart-items']}>{cartList}</ul>
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{`$${totalAmount.toFixed(2)}`}</span>
			</div>
			{showOrderConfirm && (
				<Checkout onConfirm={submitOrder} onClose={onClose} />
			)}
			{!showOrderConfirm && orderActions}
		</>
	);

	const modalContentIsOrdering = <p>processing order...</p>;
	const modalContentDidOrder = (
		<>
			Order successful
			<div className={classes.actions}>
				<button className={classes.button} onClick={onClose}>
					Cancel
				</button>
			</div>
		</>
	);
	return (
		<Modal onClose={onClose}>
			{!isOrdering && !didOrder && modalContent}
			{isOrdering && !didOrder && modalContentIsOrdering}
			{!isOrdering && didOrder && modalContentDidOrder}
		</Modal>
	);
};

export default Cart;
