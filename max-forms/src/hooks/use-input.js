import { useState } from 'react';
const useInput = (validateValue) => {
	const [value, setValue] = useState('');
	const [inputIsTouched, setInputIsTouched] = useState(false);

	const valueIsValid = validateValue(value);
	const inputIsInvalid = !valueIsValid && inputIsTouched;

	const inputChangeHandler = (e) => {
		setValue(e.target.value);
        console.log(valueIsValid)
	};

	const inputBlueHandler = (e) => {
		setInputIsTouched(true);
	};

	const reset = () => {
		setValue('');
		setInputIsTouched(false);
	};

    return {
        value,
        valueIsValid,
        inputIsInvalid,
        inputChangeHandler,
        inputBlueHandler,
        reset
    }
};

export default useInput;
