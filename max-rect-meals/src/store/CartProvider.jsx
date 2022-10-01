import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === 'ADD') {
		const updatedTotalAmount =
			state.totalAmount + action.item.price * action.item.amount;
		const existingItemIndex = state.items.findIndex(
			(item) => item.id === action.item.id
		);
		const existingItem = state.items[existingItemIndex];
		let updatedItems;
		if (existingItem) {
			const updatedItem = {
				...existingItem,
				amount: existingItem.amount + action.item.amount,
			};
			updatedItems = [...state.items];
			updatedItems[existingItemIndex] = updatedItem;
		} else {
			updatedItems = state.items.concat(action.item);
		}
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}

	if (action.type === 'REMOVE') {
		const existingItemIndex = state.items.findIndex(
			(item) => item.id === action.id
		);
		const existingItem = state.items[existingItemIndex];
		const updatedTotalAmount = state.totalAmount - existingItem.price;
		let updatedItems;
		if (existingItem.amount === 1) {
			updatedItems = state.items.filter((item) => item.id !== action.id);
		} else {
			updatedItems = [...state.items];
			updatedItems[existingItemIndex] = {
				...existingItem,
				amount: existingItem.amount - 1,
			};
		}
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}

	if (action.type === 'CLEAR') {
		return defaultState;
	}
	return defaultState;
};

const CartProvider = (props) => {
	const [cartState, dispatchCartActions] = useReducer(
		cartReducer,
		defaultState
	);
	const addItemToCartHandler = (item) => {
		dispatchCartActions({ type: 'ADD', item });
	};
	const removeItemToCartHandler = (id) => {
		dispatchCartActions({ type: 'REMOVE', id });
	};
	const clearCartFn = () => {
		dispatchCartActions({ type: 'CLEAR' });
	};
	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemToCartHandler,
		clearCart: clearCartFn,
	};
	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
