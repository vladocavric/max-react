import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import NewMeal from "./components/NewMeal/NewMeal";
function App() {
	return (
		<div>
			
			{/* <button className='btn btn-red'>Create</button> */}
			<Router>
			<Routes>
				<Route path='/'element={<Home />} />
				<Route path='meals/new'element={<NewMeal />} />
			</Routes>
			</Router>
		</div>
	);
}

export default App;
