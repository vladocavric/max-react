import { Link } from 'react-router-dom';
import classes from './QuoteItem.module.css';
import {quoteActions} from '../../store/quote-slice'
import {useDispatch } from 'react-redux';

const QuoteItem = (props) => {
  const linkUrl = `/quotes/${props.id}`
  const dispatch = useDispatch()
  const handleHighlightQuote = () => {
    dispatch(quoteActions.getQuote(props.id))
  }
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link onClick={handleHighlightQuote} className='btn' to={linkUrl}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
