import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

// Context
import { ProductsContext } from '../context/ProductContextProvider';

const ProductsDetails = (props) => {
    const params = useParams();
    const data = useContext(ProductsContext);
    const id = params.id
    const product = data[id - 1];
    const {image, title, description, price, category} = product;

    return (
        <div>
            <img src={image} alt="product" />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p><span>category: </span>{category}</p>
                <div>
                    <span>{price} $</span>
                    <Link to="/products">Back to Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;