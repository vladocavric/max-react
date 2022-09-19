import React, { useState, useEffect } from 'react';

import DummyMeals from '../dummy-meals';

const OrderContext = React.createContext({
	orderItems: [],
	orderItemsAmount: 0,
	total: 0,
	onAddToOrder: () => {},
	onRemove: () => {},
	onAdd: () => {},
});

export const OrderContextProvider = (props) => {
	const [orderItems, setOrderItems] = useState([]);
	const [orderItemsAmount, setOrderItemsAmount] = useState(0);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const amountArr = orderItems.map(meal => meal.amount)
		const amountSum = amountArr.reduce((prevVal, currValue) => prevVal + currValue, 0)
		setOrderItemsAmount(amountSum)
		const totalArr = orderItems.map(meal => meal.amount * meal.price)
		const totalSum = totalArr.reduce((prevVal, currValue) => prevVal + currValue, 0)
		setTotal(totalSum)
	}, [orderItems]);

	const changeAmount = (id, amount) => {
		const newState = orderItems.map(item => {
			if(item.id === id){
				return {
					...item,
					amount: item.amount + amount
				}
			} else {
				return item
			}
		})
		const itemIndx = newState.findIndex(item => id === item.id)
		if(newState[itemIndx].amount === 0) {
			newState.splice(itemIndx, 1)
		}
		setOrderItems(prevState => ([...newState]))	
	}

	const addToOrderHandler = (id, amount) => {
		if (amount < 1) {
			return
		}
		const itemIndx = orderItems.findIndex(item => id === item.id)
		if (itemIndx >= 0) {
			changeAmount(id, amount)			
		} else {
			const mealToAdd = DummyMeals.find(meal => meal.id === id)
			setOrderItems(prevState => ([...prevState, {...mealToAdd, amount}]))
		}
	};

	const decreesAmountByOne = (id) => {
		changeAmount(id, -1)
	}

	const increaseAmountByOne = (id) => {
		changeAmount(id, 1)
	}

	return (
		<OrderContext.Provider
			value={{
				orderItems,
				orderItemsAmount,
				total,
				onAddToOrder: addToOrderHandler,
				onRemove: decreesAmountByOne,
				onAdd: increaseAmountByOne
			}}>
			{props.children}
		</OrderContext.Provider>
	);
};

export default OrderContext