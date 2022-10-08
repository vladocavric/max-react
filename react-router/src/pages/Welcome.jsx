import { Route } from 'react-router-dom';

const Welcome = () => {
	return (
		<>
			<h1>This is a Welcome page</h1>
			<Route path='/welcome/new-user'><p>welcome new user</p></Route>
		</>
	);
};

export default Welcome;
