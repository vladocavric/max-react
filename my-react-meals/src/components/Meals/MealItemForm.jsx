import { useContext, useState } from 'react';
import Input from '../UI/Input/Input';
import styles from './MealItemForm.module.scss';

import OrderContext from '../../store/order-context';

const MealForm = ({id}) => {
	const [amount, setAmount] = useState('');
	const {onAddToOrder} = useContext(OrderContext)
	const addHandler = (e) => {
		e.preventDefault();
		onAddToOrder(id, +amount)
		setAmount('')
	};

	const handleAmountChange = (e) => {
		if(+e.target.value < 0) {
			return
		}
		setAmount(+e.target.value)
	}
	return (
		<form className={styles.form} onSubmit={addHandler}>
			<Input label='Amount' type='number'value={amount} onChange={handleAmountChange } />
			<button className='btn btn-red'>+ Add</button>
		</form>
	);
};

export default MealForm;
