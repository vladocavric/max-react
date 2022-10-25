import { configureStore } from '@reduxjs/toolkit'

import authReducer from './auth-slice';

const store = configureStore({
    reducer: {auth: authReducer} // if we have multiple reducers
})

export default store