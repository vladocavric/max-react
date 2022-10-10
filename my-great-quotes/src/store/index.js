import { configureStore } from '@reduxjs/toolkit'

import quoteReducer from './quote-slice'

const store = configureStore({
    reducer: {quote: quoteReducer} 
})

export default store