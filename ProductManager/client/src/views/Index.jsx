import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Index = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    
    const fetchProducts = () => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => {
                console.error("Error fetching products:", err);
            });
    }

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
                console.log("Hello")
            })
            .catch(err => console.error(err));
    }

    const handleAddProduct = () => {
        fetchProducts(); // Refresh the product list after adding a new product
    }
    
    return (
        <div>
            <ProductForm formOnSubmit={ handleAddProduct }/>
            <ProductList products = { products } deleteProduct={deleteProduct}/>
        </div>
    );
}

export default Index;
