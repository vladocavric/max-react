import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='Sushi'
          price={6}
          description='This is a first product - amazing!'
        />
        <ProductItem
          title='Burrito'
          price={4.5}
          description='This is a first product - amazing!'
        />
        <ProductItem
          title='Burger'
          price={7}
          description='This is a first product - amazing!'
        />
        <ProductItem
          title='Pasta'
          price={4}
          description='This is a first product - amazing!'
        />
      </ul>
    </section>
  );
};

export default Products;
