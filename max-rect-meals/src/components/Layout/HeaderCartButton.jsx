import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.scss';
const HeaderCartButton = ({ onClick }) => {
	const [animation, setAnimation] = useState(false);
	const cartCtx = useContext(CartContext);
	useEffect(() => {
		if (cartCtx.items.length === 0) {
			return;
		}
		setAnimation(true);
		const timer = setTimeout(() => {
			setAnimation(false);
		}, 300);
		return () => {
			clearTimeout(timer);
		};
	}, [cartCtx.items]);
	const noOfCartItems = cartCtx.items.reduce(
		(currentValue, item) => currentValue + item.amount,
		0
	);
	return (
		<button
			className={`${classes.button} ${animation ? classes.bump : ''}`}
			onClick={onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Cart</span>
			<span className={classes.badge}>{noOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
