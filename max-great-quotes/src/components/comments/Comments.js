import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from './CommentsList';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';

const Comments = () => {
	const [isAddingComment, setIsAddingComment] = useState(false);
	const { quoteId } = useParams();
	const {
		sendRequest,
		status,
		data: loadedComments,
		error,
	} = useHttp(getAllComments, true);

	const startAddCommentHandler = () => {
		setIsAddingComment(true);
	};

	const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

	useEffect(() => {
		sendRequest(quoteId);
	}, [sendRequest, quoteId]);

	let comments = '';

	if (status === 'pending') {
		comments = (
			<div className='centered'>
				<LoadingSpinner />
			</div>
		);
	}

	if (error) {
		comments = <p className='centered focused'>{error}</p>;
	}

	if (
		status === 'completed' &&
		(!loadedComments || loadedComments.length === 0)
	) {
		comments = <h3>No Comments</h3>;
	}

  if (status === 'completed' && loadedComments) {
    comments = <CommentsList comments={loadedComments} />
}

	return (
		<section className={classes.comments}>
			<h2>User Comments</h2>
			{!isAddingComment && (
				<button className='btn' onClick={startAddCommentHandler}>
					Add a Comment
				</button>
			)}
			{isAddingComment && (
				<NewCommentForm
					quoteId={quoteId}
					onAddedComment={addedCommentHandler}
				/>
			)}
			{comments}
			{/* {loadedComments.map(comment => <CommentItem key={comment.id} text={comment.text}/>)} */}
		</section>
	);
};

export default Comments;
