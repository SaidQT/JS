import React, { useState } from 'react'
import axios from 'axios';
export default (props) => {

    const { errors, data, setData } = props;

    // Handler when the form is submitted
    const onSubmitHandler = e => {
        console.log(data)
        e.preventDefault();
        // Call the formonSubmit function in order to post the data.
        props.formOnSubmit(data)
    }

    // todo in order to set the value of a key in an object, we take copy of the object and add
    // todo  the key with a new value. When its added the value is replaced by the new one. 
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br />
                <input className="form-control" type="text" onChange={(e) => setData({ ...data, title: e.target.value })} value={data.title} />
                {errors.title && <small className='text-danger'>{errors.title.message}</small>}
            </p>
            <p>
                <label>Price</label><br />
                <input className="form-control" type="number" onChange={(e) => setData({ ...data, price: e.target.value })} value={data.price} />
                {errors.price && <small className='text-danger'>{errors.price.message}</small>}

            </p>
            <p>
                <label>Description</label><br />
                <textarea className="form-control" onChange={(e) => setData({ ...data, description: e.target.value })} value={data.description} />
                {errors.description && <small className='text-danger'>{errors.description.message}</small>}

            </p>
            <input className="btn btn-primary" type="submit" />
        </form>
    )
}

