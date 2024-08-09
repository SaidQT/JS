import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Index = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => {
                console.error("Error fetching products:", err);
            });
    }, [products]);

    return (
        <div>
            <ProductForm />
            <ProductList products = { products } />
        </div>
    );
}

export default Index;
