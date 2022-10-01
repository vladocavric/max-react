import { useReducer } from "react"
const initialState = {
    value: '',
    inputIsTouched: false
}

const inputReducer = (state, action) => {
    if(action.type === 'INPUT') {
        return {
            value: action.value,
            inputIsTouched: state.inputIsTouched
        }
    }
    if(action.type === 'BLUR') {
        return {
            inputIsTouched: true,
            value: state.value
        }
    }
    if(action.type === 'RESET') {
        return initialState
    }
    return initialState
}
const useInput = validateValue => {
    const [inputState, dispatch] = useReducer(inputReducer, initialState)
    // const [value, setValue] = useState('')
    // const [inputIsTouched, setInputIsTouched] = useState(false)

    const inputIsValid = validateValue(inputState.value)
    const inputIsInvalid = !inputIsValid && inputState.inputIsTouched

    const inputChangeHandler = e => {
        dispatch({type: 'INPUT', value: e.target.value})
        // setValue(e.target.value)
    }
    const inputBlurHandler = e => {
        dispatch({type: 'BLUR'})
        // setInputIsTouched(true)
    }

    const reset = () => {
        dispatch({type: 'RESET'})
        // setValue('')
        // setInputIsTouched(false)
    }

    return {
        value: inputState.value,
        inputIsValid,
        inputIsInvalid,
        inputChangeHandler,
        inputBlurHandler,
        reset
    }
}

export default useInput