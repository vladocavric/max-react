import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
	const cartItems = useSelector((state) => state.cart.cartItems);
	const noItems = cartItems.length === 0;
	return (
		<Card className={classes.cart}>
      {noItems && <h2>There are no items in cart, please add some</h2>}
			{!noItems && (
				<>
					<h2>Your Shopping Cart</h2>
					<ul>
						{cartItems.map((item) => (
							<CartItem key={item.title} item={{ ...item }} />
						))}
					</ul>
				</>
			)}
		</Card>
	);
};

export default Cart;
