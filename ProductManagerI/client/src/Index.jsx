import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from './assets/components/ProductForm';
const Index = () => {
    const [ message, setMessage ] = useState("Loading...")
    useEffect(()=>{
        axios.get("http://localhost:8000/api")
            .then(res=>setMessage(res.data.message))
    }, []);
    return (
        <div>
            <ProductForm></ProductForm>
        </div>
    )
}

export default Index