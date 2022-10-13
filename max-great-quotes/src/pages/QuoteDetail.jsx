import { useParams, Route, useHistory, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_DATA = [
	{ id: 'q1', author: 'Max', text: 'Learning React is FUN!' },
	{ id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];

const QuoteDetail = () => {
	const history = useHistory();
	const params = useParams();
	const match = useRouteMatch();
	const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId);
	if (!quote) {
		history.push('/404');
		return;
	}
	return (
		<>
			<HighlightedQuote text={quote.text} author={quote.author} />
			<p>{params.quoteId}</p>
			<Route path={`/quotes/${params.quoteId}`} exact>
				<div className='centered'>
					<Link
						className='btn'
						to={`${match.url}/comments`}>
						Load Comments
					</Link>
				</div>
			</Route>
			<Route path={`${match.path}/comments`}>
				<Comments />
			</Route>
		</>
	);
};

export default QuoteDetail;
