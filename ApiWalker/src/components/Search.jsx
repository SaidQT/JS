import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from  "react-router-dom"
const Search = (props) => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [id, setID] = useState(0);
    const navigate = useNavigate()
    //Function to retreive the values of categories and saving them using state
    useEffect(() => {
        fetch('https://swapi.dev/api/')
            .then(response => response.json())
            .then(response => setCategories(Object.keys(response)))
    }, []);
    //Function to handle the navigation link after users fill the form
    const sendSurvey = (e) => {
        e.preventDefault();
        //The user is navigated to the selected category/ id link in order to fetch the data using the link
        props.settingURL(selectedCategory,id)
        navigate(`/${selectedCategory}/${id}`)
    }

    return (
        <div className="container mt-4">
            <form className="form-inline" onSubmit={sendSurvey}>
                <label>Search for:</label>
                {/* Map through the categories that were fetched and add them as an option in the select menu */}
                <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} className="form-control">
                    {categories.map((category, idx) =>
                        <option key={idx} value={category}>{category}</option>
                    )}
                </select>
                <label>ID:</label>
                <input type="number" onChange={e => setID(e.target.value)} value={id} className="form-control" />
                <input type="submit" value="Search" className="btn btn-primary" />
            </form>
        </div>
    )
}

export default Search