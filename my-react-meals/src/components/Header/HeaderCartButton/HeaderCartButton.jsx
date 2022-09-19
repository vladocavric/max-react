import { useState, useContext } from 'react';
import Cart from '../../Cart/Cart';
import CartIcon from './CartIcon';
import styles from './HeaderCartButton.module.scss';
import OrderContext from '../../../store/order-context';
const HeaderCartButton = () => {
	const [showCard, setShowCard] = useState(false);
	const {orderItemsAmount} = useContext(OrderContext)
	const onCartHandle = () => {
		setShowCard(!showCard);
	};
	return (
		<>
			<button className={styles.button} onClick={onCartHandle}>
				<span className={styles.icon}>
					<CartIcon />
				</span>
				Your Cart
				<span className={styles.badge}>{orderItemsAmount}</span>
			</button>
			{showCard && <Cart toggleCart={onCartHandle} />}
		</>
	);
};

export default HeaderCartButton;
