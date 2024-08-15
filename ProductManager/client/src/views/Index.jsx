import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Index = () => {
    const [products, setProducts] = useState([]);
    // Form errors
    const [errors, setErrors] = useState([]);
    // Data represents the form inputs
    // ! We used lifting state to solve the asynchorous problem of use State, in order to empty the fields if no errors exists, and 
    // ! keep the fields if there is errors so the user can keep his inputs.
    const [data, setData] = useState({});
    
    // ! Create a function instead of fetching the data inside the use Effect because we dont want the use Effect to enter an infinite 
    // ! loop.  
    useEffect(() => {
        fetchProducts();
    }, []);

    // This function is used to fetch the data (All products) from the backend side.
    const fetchProducts = () => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => {
                console.error("Error fetching products:", err);
            });
    }

    // ? This function is used to remove the element from the DOM after removing it from the database, we need it so there is no need 
    // ? to refresh the page in order for the document to disappear.
    // ! If we put the products inside the useEffect, there is no need for this function, but the useEffect enters an infinite loop
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    // This function is used to delete a product from the data and also execute the removefromDOM function. 
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
                console.log("Hello")
            })
            .catch(err => {
                console.error(err)

            });
    }
    // This function is used to create a product.
    const createProduct = (data) => {
        axios.post('http://localhost:8000/api/product', data)
        // If there is no errors
        // ! Clear the inputs and the errors and execute the fetchProducts function to update products.
            .then(res => {
                console.log(res)
                setData({ title: "", price: 0, description: "" })
                setErrors([])
                fetchProducts()
            }
            )
            // If there is errors we set the errors equal to the err
            // And pass it as props to the form.
            .catch(err => {
                console.log(err)
                setErrors(err.response.data.errors)
            })
    }


    return (
        <div>
            <ProductForm
                data={data}
                setData={setData}
                formOnSubmit={createProduct}
                errors={errors} />
            <ProductList products={products} deleteProduct={deleteProduct} />
        </div>
    );
}

export default Index;
