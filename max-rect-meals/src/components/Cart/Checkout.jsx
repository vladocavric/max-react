import { useRef, useState } from 'react';
import classes from './Checkout.module.scss';

const isNotEmpty = (value) => value !== '';
const isFiveCar = (value) => value.length === 5;

const Checkout = ({ onClose, onConfirm }) => {
	const [formInputsValidity, setFormInputsValidity] = useState({
		name: true,
		street: true,
		postNo: true,
		city: true,
	});
	const nameRef = useRef();
	const streetRef = useRef();
	const postRef = useRef();
	const cityRef = useRef();
	const confirmHandler = (event) => {
		event.preventDefault();

		const nameIsValid = isNotEmpty(nameRef.current.value);
		const streetIsValid = isNotEmpty(streetRef.current.value);
		const postalNoIsValid = isFiveCar(postRef.current.value);
		const cityIsValid = isNotEmpty(cityRef.current.value);

		setFormInputsValidity({
			name: nameIsValid,
			street: streetIsValid,
			postNo: postalNoIsValid,
			city: cityIsValid,
		});

		const formIsValid =
			nameIsValid && streetIsValid && postalNoIsValid && cityIsValid;

		if (!formIsValid) return;

		onConfirm({
			name: nameRef.current.value,
			street: streetRef.current.value,
			postalNo: postRef.current.value,
			city: cityRef.current.value,
		});
	};

	return (
		<form className={classes.form} onSubmit={confirmHandler}>
			<div
				className={`${classes.control} ${
					formInputsValidity.name ? '' : classes.invalid
				}`}>
				<label htmlFor='name'>Your Name</label>
				<input type='text' id='name' ref={nameRef} />
				{!formInputsValidity.name && <p>Please enter a valid name</p>}
			</div>
			<div
				className={`${classes.control} ${
					formInputsValidity.street ? '' : classes.invalid
				}`}>
				<label htmlFor='street'>Street</label>
				<input type='text' id='street' ref={streetRef} />
				{!formInputsValidity.street && (
					<p>Please enter a valid street</p>
				)}
			</div>
			<div
				className={`${classes.control} ${
					formInputsValidity.postNo ? '' : classes.invalid
				}`}>
				<label htmlFor='postal'>Postal Code</label>
				<input type='text' id='postal' ref={postRef} />
				{!formInputsValidity.postNo && (
					<p>Please enter a valid postal code</p>
				)}
			</div>
			<div
				className={`${classes.control} ${
					formInputsValidity.city ? '' : classes.invalid
				}`}>
				<label htmlFor='city'>City</label>
				<input type='text' id='city' ref={cityRef} />
				{!formInputsValidity.city && <p>Please enter a valid city</p>}
			</div>
			<div className={classes.actions}>
				<button type='button' onClick={onClose}>
					Cancel
				</button>
				<button className={classes.submit}>Confirm</button>
			</div>
		</form>
	);
};

export default Checkout;
