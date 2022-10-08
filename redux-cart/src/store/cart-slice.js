import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	showCart: false,
	noOfCartItems: 0,
	cartItems: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			const index = state.cartItems.findIndex(
				(item) => item.title === action.payload.title
			);
			if (index === -1) {
				// state.cartItems = [
				// 	...state.cartItems,
				// 	{
				// 		...action.payload,
				// 		quantity: 1,
				// 		total: action.payload.price,
				// 	},
				// ];
				state.cartItems.push({
					...action.payload,
					quantity: 1,
					total: action.payload.price,
				});
			} else {
				// state.cartItems[index] = {
				// 	...state.cartItems[index],
				// 	quantity: state.cartItems[index].quantity + 1,
				// 	total:
				// 		(state.cartItems[index].quantity + 1) *
				// 		state.cartItems[index].price,
				// };
				state.cartItems[index].quantity++;
				state.cartItems[index].total =
					state.cartItems[index].total + action.payload.price;
			}
		},
		removeItem(state, action) {
			const index = state.cartItems.findIndex(
				(item) => item.title === action.payload.title
			);
			if (state.cartItems[index].quantity === 1) {
				state.cartItems.splice(index, 1);
			} else {
				// state.cartItems[index] = {
				// 	...state.cartItems[index],
				// 	quantity: state.cartItems[index].quantity - 1,
				// 	total:
				// 		(state.cartItems[index].quantity - 1) *
				// 		state.cartItems[index].price,
				// };
				state.cartItems[index].quantity--;
				state.cartItems[index].total =
					state.cartItems[index].total - state.cartItems[index].price;
			}
		},
		toggleCart(state) {
			state.showCart = !state.showCart;
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
