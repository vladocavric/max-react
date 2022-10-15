import { useParams, Route, useHistory, Link, useRouteMatch } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import { useEffect } from 'react';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const QuoteDetail = () => {
	const {
		sendRequest,
		status,
		data: quote,
		error,
	} = useHttp(getSingleQuote, true);
	const history = useHistory();
	const {quoteId} = useParams();
	const match = useRouteMatch();

	useEffect(() => {
		sendRequest(quoteId)
	}, [sendRequest, quoteId]);

	if (status === 'pending') {
		return (
			<div className='centered'>
				<LoadingSpinner />
			</div>
		);
	}

	if (error) {
        return <p className="centered focused">{error}</p>
    }

	if (status === 'completed' && !quote.text) {
		history.push('/404');
        return 
    }

	return (
		<>
			<HighlightedQuote text={quote.text} author={quote.author} />
			<Route path={`/quotes/${quoteId}`} exact>
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
