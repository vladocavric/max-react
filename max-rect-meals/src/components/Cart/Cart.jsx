import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.scss';
import CartItem from './CartItem';

const Cart = ({ onClose }) => {
	const { items, totalAmount, addItem, removeItem } = useContext(CartContext);

	const handleRemoveItem = (id) => {
		removeItem(id);
	};
	const handleAddItem = (item) => {
		addItem({ ...item, amount: 1 });
	};

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
	return (
		<Modal onClose={onClose}>
			<ul className={classes['cart-items']}>{cartList}</ul>
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{`$${totalAmount.toFixed(2)}`}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']} onClick={onClose}>
					Cancel
				</button>
				{!!items.length && (
					<button className={classes.button}>order</button>
				)}
			</div>
		</Modal>
	);
};

export default Cart;
