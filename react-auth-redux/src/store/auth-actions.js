import { authActions } from './auth-slice';


export const loginReq = ({email = '', password = '', isLogin = true}) => {
    let url;
    if (isLogin) {   
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`;
    } else {
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY}`;
    }
	return async (dispatch) => {
		const sendRequest = async () => {
			const response = await fetch(url, {
				method: 'POST',
				body: JSON.stringify({
					email,
					password,
					returnSecureToken: true,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			});

            const data = await response.json();
			if (!response.ok) {
				throw new Error('something went wrong');
			}

            return data
		};
        try {
            const data = await sendRequest()
            console.log(+data.expiresIn * 1000)
            console.log(data.idToken)
            const remainingTime = +data.expiresIn * 1000
            const tokenExp = new Date().getTime() + remainingTime
            const tokenExpDate = new Date(tokenExp).toString()
            localStorage.setItem('token', data.idToken);
			localStorage.setItem('tokenExpDate', tokenExpDate);
            dispatch(authActions.login())
            setTimeout(() => {
                dispatch(authActions.logout())
            }, remainingTime)
        } catch (err) {
            alert(err)
        }
	};
};