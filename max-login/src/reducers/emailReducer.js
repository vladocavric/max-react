const emailReducer = (prevState, actions) => {
    if(actions.type === 'EMAIL_INPUT') {
        return {
            value: actions.value,
            isValid: actions.value.includes('@')
        }
    }
    if(actions.type === 'EMAIL_BLUR') {
        return {
            value: prevState.value,
            isValid: prevState.value.includes('@')
        }
    }
    return {
        value: '',
        isValid: null
    }
}

export default emailReducer