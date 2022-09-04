const passwordReducer = (prevState, actions) => {
    if(actions.type === 'PASSWORD_INPUT') {
        return {
            value: actions.value,
            isValid: actions.value.trim().length > 2
        }
    }
    if(actions.type === 'PASSWORD_BLUR') {
        return {
            value: prevState.value,
            isValid: prevState.value.trim().length > 2
        }
    }
    return {
        value: '',
        isValid: null
    }
}

export default passwordReducer