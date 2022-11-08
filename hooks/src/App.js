import React, {useContext} from 'react';

import Ingredients from './components/Ingredients/Ingredients';
import Auth from './components/Auth';
import AuthContext from './context/auth-context';

const App = (props) => {
  const {isLoggedIn} = useContext(AuthContext);
	return (
		<>
			{isLoggedIn && <Ingredients />}
			{!isLoggedIn && <Auth />}
			
		</>
	);
};

export default App;
