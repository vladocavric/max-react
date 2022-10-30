import React from 'react';
// import { useDispatch } from 'react-redux';

import Card from '../UI/Card';
// import ProductsContext from '../../store/products-context';
import './ProductItem.css';
// import { toggleFav } from '../../store/actions/products';

import { useStore } from '../../hook-store/store';

const ProductItem = React.memo(props => {
  console.log('rendering')
  const dispatch = useStore(false)[1]
//  const toggleFav = useContext(ProductsContext).toggleFav;
  // const dispatch = useDispatch();

  const toggleFavHandler = () => {
    dispatch('TOGGLE_FAV', props.id);
    // toggleFav(props.id)
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;
