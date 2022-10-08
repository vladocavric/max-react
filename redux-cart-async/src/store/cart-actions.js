import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const fetchCartData = () => {
	return async (dispatch) => {
			const sendRequest = async () => {
			const response = await fetch(
				'https://max-react-8c77c-default-rtdb.firebaseio.com/cart.json'
			);

			const data = await response.json();
			if (!response.ok) {
				throw new Error('something went wrong');
			}

			return data;
		};

		try {
			const data = await sendRequest();
			dispatch(
				cartActions.replaceCart({
					totalQuantity: data.totalQuantity,
					items: data.items || [],
				})
			);
		} catch (err) {
			dispatch(
				uiActions.showNotification({
					status: 'error',
					title: 'some error',
					message: err.message,
				})
			);
		}
	};
};

export const sendCartData = (cart) => {
	return async (dispatch) => {
		dispatch(
			uiActions.showNotification({
				status: 'pending',
				title: 'Sending...',
				message: 'Sending Cart Data....',
			})
		);

		const sendRequest = async () => {
			const response = await fetch(
				'https://max-react-8c77c-default-rtdb.firebaseio.com/cart.json',
				{
					method: 'PUT',
					body: JSON.stringify({items: cart.items, totalQuantity: cart.totalQuantity}),
				}
			);

			if (!response.ok) {
				throw new Error('something went wrong');
			}
		};

		try {
			await sendRequest();
			dispatch(
				uiActions.showNotification({
					status: 'success',
					title: 'success',
					message: 'data successively fetched',
				})
			);
		} catch (err) {
			dispatch(
				uiActions.showNotification({
					status: 'error',
					title: 'some error',
					message: err.message,
				})
			);
		}
	};
};
