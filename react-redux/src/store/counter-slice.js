import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++
        },
        increase(state, action) {
            // state.counter = state.counter + action.payload // if we sent payload as a primitive argument
            state.counter = state.counter + action.payload.amount // if we send payload as an object with amount key
        },
        decrement(state) {
            state.counter--
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
})

export const counterActions = counterSlice.actions;

export default counterSlice.reducer