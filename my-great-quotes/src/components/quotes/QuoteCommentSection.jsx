import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import classes from './QuoteCommentSection.module.css';
import { quoteActions } from '../../store/quote-slice';
const QuoteCommentSection = ({ comments, id }) => {
	const commentText = useRef();
	const dispatch = useDispatch();
	const [writeComment, setWriteComment] = useState(false);
	const handleAddComment = () => {
		setWriteComment(true);
		// console.log()
		if (writeComment) {
			dispatch(quoteActions.addComment({ id, comment:  commentText.current.value}));
		}
	};
	return (
		<div className={classes.comments}>
			<h3>User Comments</h3>
			{writeComment && (
				<div>
					<h5>Your Comment</h5>
					<textarea
						ref={commentText}
						name='comment'
						id=''
						cols='80'
						rows='10'></textarea>
				</div>
			)}
			<button className='btn' onClick={handleAddComment}>
				Add a Comment
			</button>
			{comments.length === 0 && <p>No comments were added yet!</p>}
			{comments.length !== 0 && comments.map((comment, index) => <div key={index} className={classes.comment}>{comment}</div>)}
		</div>
	);
};

export default QuoteCommentSection;
