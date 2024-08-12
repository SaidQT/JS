import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "../components/Header"
import List from "../components/List"

const Index = () => {
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                setAuthors(res.data);
            })
            .catch(err => {
                console.error("Error fetching authors:", err);
            });
    }, [authors]);

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res => {
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            <Header routee={'/authors/new'} link={"Add authors"} content={"We have quotes by"}></Header>
            <List authors={ authors } delete={ deleteAuthor }/>
        </div>
    );
}

export default Index;
