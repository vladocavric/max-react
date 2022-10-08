import { Link } from "react-router-dom"
const Products = () => {
    return(<>
    <h1>This is a Products page</h1>
    <ul>
        <li>
            <Link to='/products/book'>Book</Link>
        </li>
        <li>
            <Link to='/products/car'>Car</Link>
        </li>
        <li>
            <Link to='/products/phone'>Phone</Link>
        </li>
    </ul>
    </>)
}

export default Products