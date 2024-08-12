import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const ProductList = (props) => {
     const { removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
                console.log("Hello")
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            <h1 className="mt-5 mb-2">All products:</h1>
            {props.products.map((product, i) => (
                <div key={i} className="mb-3">
                    <Link to={`/product/${product._id}`} className="btn btn-primary me-2">
                        <p className="mb-0">{product.title}</p>
                    </Link>
                    <Link to={`/product/${product._id}/edit`} className="btn btn-warning me-2">
                        Edit
                    </Link>
                    <button className="btn btn-danger me-2" onClick={(e) => { deleteProduct(product._id) }}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    )
}

export default ProductList;

