import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.scss';
const MealItemForm = (props) => {
	const [errState, setErrState] = useState(false);
	const amountInputRef = useRef();
	const handleAmount = (e) => {
		e.preventDefault();
		const amountValue = +amountInputRef.current.value;
		if (amountValue.length === 0 || amountValue < 1 || amountValue > 5) {
			setErrState(true);
			return;
		}
		props.onAddToCart(amountValue);
	};
	return (
		<form className={classes.form} onSubmit={handleAmount}>
			<Input
				ref={amountInputRef}
				label={'Amount'}
				input={{
					type: 'number',
					id: 'amount_' + props.id,
					// min: '1',
					// max: '5',
					step: '1',
					defaultValue: '1',
				}}
			/>
			<button>+ Add</button>
			{errState && <p>please enter a valid amount 1-5</p>}
		</form>
	);
};

export default MealItemForm;
