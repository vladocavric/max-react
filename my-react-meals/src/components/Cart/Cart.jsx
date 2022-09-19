import { useContext } from 'react';
import Modal from '../UI/Modal/Modal';
import styles from './Cart.module.scss';
import OrderContext from '../../store/order-context';
import CartItem from './CartItem';

const Cart = ({ toggleCart }) => {
	const { orderItems, total } = useContext(OrderContext);
	// const [showModal, setShowModal] = useState(false);
	// const modalToggleHandler = () => {
	// 	setShowModal(!showModal);
	// };
	const handleSubmit = () => {
		console.log('ordering...');
	};

	return (
		<>
			<Modal
				className={`${styles.Cart}`}
				// message={'error.message'}
				onConfirm={toggleCart}
				// btnConfirmLabel={'Cancel'}
				// onSubmit={handleSubmit}
				// onSubmitLabel='Order'
			>
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
					{!!orderItems.length && <button className='btn btn-red' onClick={handleSubmit}>
						Order
					</button>}
				</footer>
			</Modal>
		</>
	);
};

export default Cart;
