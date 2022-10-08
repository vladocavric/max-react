import {  useDispatch, useSelector } from 'react-redux';
import {cartActions} from '../../store/cart-slice'
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const cartItems = useSelector(state => state.cart.cartItems)
  const dispatch = useDispatch()

  const cartToggleHandler = () => {
    dispatch(cartActions.toggleCart())
  }
  return (
    <button className={classes.button} onClick={cartToggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems.length}</span>
    </button>
  );
};

export default CartButton;
