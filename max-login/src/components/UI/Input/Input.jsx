import React, { useRef, useImperativeHandle } from 'react';
import styles from './Input.module.scss';
const Input = React.forwardRef((props, ref) => {
	const inputRef = useRef();
	const focus = () => {
		inputRef.current.focus();
	};

	useImperativeHandle(ref, () => {
		return {
			focus: focus,
		};
	});
	return (
		<div
			className={`${styles.control} ${
				props.isInvalid ? styles.invalid : ''
			}`}>
			<label htmlFor={props.id}>{props.label}</label>
			<input
				ref={inputRef}
				type={props.type}
				id={props.id}
				value={props.value}
				onChange={props.onChange}
				onBlur={props.onBlur}
				autoComplete='on'
			/>
		</div>
	);
});

export default Input;
