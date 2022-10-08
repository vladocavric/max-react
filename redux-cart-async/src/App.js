import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

import { uiActions } from './store/ui-slice';
import {sendCartData, fetchCartData} from './store/cart-actions'

let isInitial = true;

function App() {
	const showCart = useSelector((state) => state.ui.cartIsVisible);
	const notification = useSelector((state) => state.ui.notification);
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	

	useEffect(()=> {
		dispatch(fetchCartData())
	}, [dispatch])

	useEffect(() => {
		if (isInitial) {
			isInitial = false;
			return
		} 
		if(cart.updated) {
			dispatch(sendCartData(cart))
		}

		setTimeout(() => {
			dispatch(
				uiActions.showNotification({
					status: '',
					title: '',
					message: '',
				})
			);
		}, 2000);
	}, [cart, dispatch]);

	return (
		<>
			{notification && notification.title && (
				<Notification
					status={notification.status}
					error={notification.error}
					message={notification.message}
				/>
			)}
			<Layout>
				{showCart && <Cart />}
				<Products />
			</Layout>
		</>
	);
}

export default App;
