import { useRef, useEffect } from 'react';

import { addComment } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import useHttp from '../../hooks/use-http';

import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
  const {quoteId, onAddedComment} = props
  const commentTextRef = useRef();
  const {sendRequest, status, error} = useHttp(addComment)

  useEffect(() => {
   if(status === 'completed' && !error) {
    onAddedComment()
   }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    // optional: Could validate here

    // send comment to server

    sendRequest({quoteId, commentData: {text: commentTextRef.current.value}})
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === 'pending' && <LoadingSpinner />}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
