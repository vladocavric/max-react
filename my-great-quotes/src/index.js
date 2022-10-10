import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import App from './App';
import store from './store/index';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
);
