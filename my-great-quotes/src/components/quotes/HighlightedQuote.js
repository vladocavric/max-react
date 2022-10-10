import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import classes from './HighlightedQuote.module.css';
import QuoteCommentSection from './QuoteCommentSection';

const HighlightedQuote = (props) => {
	const history = useHistory()
	const [commentsSection, setCommentSection] = useState(false);
	const quote = useSelector((state) => state.quote.highlightedQuote);
	if(!quote) {
		history.push('/404')
		return
	}
	const handleShowCommentSection = () => {
		setCommentSection(true);
	};

	return (
		<>
			<figure className={classes.quote}>
				<p>{quote.text}</p>
				<figcaption>{quote.author}</figcaption>
			</figure>
			<div className={classes.commentSection}>
				{!commentsSection && (
					<button
						className='btn--flat'
						onClick={handleShowCommentSection}>
						Load Comments
					</button>
				)}
				{commentsSection && <QuoteCommentSection id={quote.id} comments={quote.comments}/>}
			</div>
		</>
	);
};

export default HighlightedQuote;
