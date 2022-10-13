import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';
import QuoteDetail from './pages/QuoteDetail';

function App() {
	return (
		<div>
			<Layout>
				<Switch>
					<Route path='/' exact>
						<Redirect to='/quotes' />
					</Route>
					<Route path='/quotes' exact>
						<AllQuotes />
					</Route>
					<Route path='/quotes/new' exact>
						<NewQuote />
					</Route>
					<Route path='/quotes/:quoteId'>
						<QuoteDetail />
					</Route>
					<Route path='*'>
						<NotFound />
					</Route>
				</Switch>
			</Layout>
		</div>
	);
}

export default App;
