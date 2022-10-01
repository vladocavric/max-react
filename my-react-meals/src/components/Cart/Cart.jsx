import { useContext, useState } from 'react';
import useHttp from '../../hooks/use-http';
import Modal from '../UI/Modal/Modal';
import Loader from '../UI/Loader/Loader';
import styles from './Cart.module.scss';
import OrderContext from '../../store/order-context';
import CartItem from './CartItem';

const Cart = ({ toggleCart }) => {
	const [orderNo, setOrderNo] = useState('')
	const { orderItems, total } = useContext(OrderContext);
	const {isLoading, sendRequest: sendOrder } = useHttp();

	const handleSubmit = (e) => {
		e.preventDefault()
		sendOrder({
			url: 'https://max-react-8c77c-default-rtdb.firebaseio.com/orders.json',
			method: 'POST',
			body: { total, items: orderItems },
			headers: {
				'Content-Type': 'application/json',
			},
		}, data => setOrderNo(data.name));

	};

	return (
		<>
			<Modal
				className={`${styles.Cart}`}
				onConfirm={toggleCart}
				>
					{isLoading && <Loader />}
					{orderNo && <h1>your order number is: {orderNo}</h1>}
				{!isLoading && !orderNo &&
				<form onSubmit={handleSubmit}>
				{orderItems.map((meal) => {
					return (
						<CartItem
							name={meal.name}
							price={meal.price}
							amount={meal.amount}
							key={meal.id}
							id={meal.id}
						/>
					);
				})}
				{!!orderItems.length && <h2 className={styles.Cart__total}>
					Total Amount<span>${total.toFixed(2)}</span>
				</h2>}
				{!orderItems.length && <h2 className={styles.Cart__total}>
					There are no items in Cart
				</h2>}
				<footer>
					<button className='btn btn-white' onClick={toggleCart}>
						Close
					</button>
					{!!orderItems.length && <button className='btn btn-red'>
						Order
					</button>}
				</footer>
				</form>
			}
			</Modal>
		</>
	);
};

export default Cart;
