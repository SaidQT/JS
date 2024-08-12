import React, { useState, useEffect } from 'react'
import AuthorForm from '../components/AuthorForm';
import Header from '../components/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [authors, setAuthors] = useState([]);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:8000/api/authors")
      .then(res => {
        setAuthors(res.data);
      
      })
      .catch(err => {
        console.error("Error fetching authors:", err);
      });
  }, []);

  const createAuthor = author => {
    axios.post('http://localhost:8000/api/author', author)
      .then(res => {
        navigate(-1)
        console.log(res.data)
        setAuthors([...authors, res.data])
      })
      .catch(err => {
        console.log(err.response.data.errors)
        const errorResponse = err.response.data.errors;
        setErrors(errorResponse);
      })
  }

  return (
    <div>
      <Header routee={"/authors"} link={"Home "} content={"Add a new author:"}></Header>
      <AuthorForm onSubmit={ createAuthor } error={errors} initialName=""></AuthorForm>
    </div>
  )
}

export default Create