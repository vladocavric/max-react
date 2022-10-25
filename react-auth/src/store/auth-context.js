import React, { useState, useEffect, useCallback } from 'react';
let logoutTimer;
const AuthContext = React.createContext({
	token: '',
	isLoggedIn: false,
	login: (tokenId) => {},
	logout: () => {},
});

const calculateLogoutTime = (expiresInMilSeconds) => {
	const now = new Date().getTime();
	const expirationTime = new Date(now + expiresInMilSeconds).getTime();
	const remainingDuration = expirationTime - now;
	return remainingDuration;
};

const retrieveStoredToken = () => {
	const storedToken = localStorage.getItem('token')
	const storedExpirationDate = localStorage.getItem('expirationTime')
	const timeLeft = new Date(storedExpirationDate).getTime() - new Date().getTime()
	if (timeLeft <= 60000) {
		localStorage.removeItem('token')
		localStorage.removeItem('expirationTime')
		return null
	}

	return {
		token: storedToken,
		duration: timeLeft
	}
};

export const AuthContextProvider = (props) => {
	const tokenData = retrieveStoredToken()
	let initialToken 
	if(tokenData) {
		initialToken = tokenData.token;
	}
	
	const [token, setToken] = useState(initialToken);
	const userIsLoggedIn = !!token;

	const logoutHandler = useCallback(() => {
		setToken(null);
		localStorage.removeItem('token');
		localStorage.removeItem('expirationTime');
		if (logoutTimer) {
			clearInterval(logoutTimer);
		}
	}, [])
	

	const loginHandler = (token, expirationInMilSeconds) => {
		setToken(token);
		localStorage.setItem('token', token);
		const expirationTime = new Date(
			new Date().getTime() + expirationInMilSeconds
		);
		localStorage.setItem('expirationTime', expirationTime);
		const remainingDuration = calculateLogoutTime(expirationInMilSeconds);

		logoutTimer = setTimeout(logoutHandler, remainingDuration);
	};

	useEffect(() => {
		if(tokenData) {
			logoutTimer = setTimeout(logoutHandler, tokenData.duration)
		}
	}, [tokenData, logoutHandler]);

	return (
		<AuthContext.Provider
			value={{
				token,
				isLoggedIn: userIsLoggedIn,
				login: loginHandler,
				logout: logoutHandler,
			}}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
