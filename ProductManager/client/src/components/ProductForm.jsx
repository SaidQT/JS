import React, { useState } from 'react'
import axios from 'axios';
export default (props) => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res)
                props.formOnSubmit()
            }
            )
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br />
                <input className="form-control" type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            </p>
            <p>
                <label>Price</label><br />
                <input className="form-control" type="number" onChange={(e) => setPrice(e.target.value)} value={price} />
            </p>
            <p>
                <label>Description</label><br />
                <textarea className="form-control" onChange={(e) => setDescription(e.target.value)} value={description} />
            </p>
            <input className="btn btn-primary" type="submit" />
        </form>
    )
}

