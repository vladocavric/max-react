import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoggedIn: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login(state, action) {
			state.isLoggedIn = true;
		},
		logout(state) {
			state.isLoggedIn = false;
			localStorage.removeItem('token');
			localStorage.removeItem('tokenExpDate');
		},
	},
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
