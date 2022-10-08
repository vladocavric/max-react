import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';
import cartReducer from './cart-slice';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartReducer },
});

export default store;
