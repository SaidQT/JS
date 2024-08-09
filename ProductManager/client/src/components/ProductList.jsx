import React from 'react'
import { Link } from 'react-router-dom'
const PersonList = (props) => {

    return (
        <div>
            <h1 className="mt-5 mb-2">All products:</h1>
            {props.products.map((product, i) =>
                <Link to={`/product/${product._id}`} key={i}>
                    <p>{product.title}</p>
                </Link>
            )}
        </div>
    )
}

export default PersonList;

