import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';

import {quoteActions} from '../../store/quote-slice'

import QuoteItem from './QuoteItem';
import NoQuotesFount from './NoQuotesFound';
import classes from './QuoteList.module.css';

const QuoteList = () => {
	const dispatch = useDispatch()
	const location = useLocation();
	const quotes = useSelector((state) => state.quote.quotes);

	const sortLink = location.search.includes('asc')
		? '/quotes?sort=dsc'
		: '/quotes?sort=asc';

	const sortedQuotes = quotes

	useEffect(() => {
		if(location.search.includes('asc')) {
			dispatch(quoteActions.sortQuotes('asc'))
		}
		if(location.search.includes('dsc')) {
			dispatch(quoteActions.sortQuotes('dsc'))
		}
	}, [dispatch, location]);

	return (
		<Fragment>
			{!quotes.length && <NoQuotesFount />}
			{!!quotes.length && (
				<>
					<div className={classes.sorting}>
						<Link to={sortLink}>
							Sort{' '}
							{location.search.includes('asc')
								? 'Descending'
								: 'Ascending'}
						</Link>
					</div>
					<ul className={classes.list}>
						{sortedQuotes.map((quote) => (
							<QuoteItem
								key={quote.id}
								id={quote.id}
								author={quote.author}
								text={quote.text}
							/>
						))}
					</ul>
				</>
			)}
		</Fragment>
	);
};

export default QuoteList;
