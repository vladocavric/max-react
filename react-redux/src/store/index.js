// import {createStore} from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import authReducer from './auth-slice';
import counterReducer from './counter-slice';





// const reduxCounter = (state = initialState, action) => {
//     if (action.type === 'INCREMENT') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'INCREASE') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'DECREMENT') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'TOGGLE') {
//         return {
//             counter: state.counter ,
//             showCounter: !state.showCounter
//         }
//     }
//     return state
// }
const store = configureStore({
    // reducer: counterSlice.reducer // if we have only one reducer
    reducer: {counter: counterReducer, auth: authReducer} // if we have multiple reducers
})

// const counterSubscriber = () => {
//     const latestState = store.getState()
//     console.log(latestState)
// }

// store.subscribe(counterSubscriber)
// store.dispatch({type: 'INCREMENT'})
// store.dispatch({type: 'DECREMENT'})

export default store