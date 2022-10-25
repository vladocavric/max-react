import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/auth-context';

function App() {
	const { isLoggedIn } = useContext(AuthContext);
	const redirectIfNotLoggedIn = (component) => {
		if (isLoggedIn) {
			return component;
		} else {
			return <Redirect to='auth' />;
		}
	};

	return (
		<Layout>
			<Switch>
				<Route path='/' exact>
					<HomePage />
				</Route>
				<Route path='/auth'>
					{!isLoggedIn && <AuthPage />}
					{isLoggedIn && <Redirect to='/' />}
				</Route>
				<Route path='/profile'>
					{redirectIfNotLoggedIn(<UserProfile />)}
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
