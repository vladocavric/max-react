import { useHistory } from "react-router-dom";

import { useRef } from 'react';
import {  useDispatch } from 'react-redux';
import {quoteActions} from '../../store/quote-slice'

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const dispatch = useDispatch()
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const history = useHistory();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    // props.onAddQuote({ author: enteredAuthor, text: enteredText });
    dispatch(quoteActions.addQuote({ author: enteredAuthor, text: enteredText }))
    history.push('/quotes?sort=asc');
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className='btn'>Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
