import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Detail = (props) => {
    const [product, setProduct] = useState({})
    // This variable is used to check if the id matches one of the documents in the database
    // or not.
    const [loaded, setLoaded] = useState(false)

    // ! Get the ID value from the url parameter
    const { id } = useParams();
    const navigate = useNavigate();
    // This function is used to delete the product and navigate to the main page
    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/product/${productId}`)
            .then(res => {
                navigate(-1);
            })
            .catch(err => {
                console.error('Error deleting product:', err);
            });
    }

    // This function is used to get the document from the database using the id in the route 
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setProduct(res.data)
                // Set the loaded variable to "true" if the fetching of the product worked
                setLoaded(true)
                console.log(res.data)
            })
            .catch(err => {
                console.error(err)
            });
    }, []);

    return (
        <>
            {/* If the loaded variable is false display this message */}
            {!loaded && <p>This product doesn't exist the database</p>}

            {/* If the loaded variable and true and there is an object display the data */}
            {loaded && (
                <div>
                    <p>Title: {product.title}</p>
                    <p>Price: {product.price}</p>
                    <p>Description: {product.description}</p>
                    <button className="btn btn-danger mt-2" onClick={() => deleteProduct(product._id)}>
                        Delete
                    </button>
                </div>
            )}
        </>
    )
}
export default Detail;