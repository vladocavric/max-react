import { Link, useParams } from "react-router-dom";
const ProductDetails = () => {
    const params = useParams()
	return (
		<>
			<h1>This is a Product Details page</h1>
            <p>{params.productId}</p>
            <Link to='/products'>go back</Link>
		</>
	);
};

export default ProductDetails;
