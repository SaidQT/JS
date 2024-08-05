import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
    Link
} from "react-router-dom";

const View = (props) => {
    //Extract the values of category and id using the { useParams } hook.
    const { category, id } = useParams();
    //This variable is where the fetch data is saved.
    const [resultss, setResultss] = useState([]);
    //If there is an error in fetching, this variable is used to save the error
    const [error, setError] = useState(null);

    //This function is used to fetch the api using category and id in the url parameters
    useEffect(() => {
        fetch(`https://swapi.dev/api/${category}/${id}`)
            .then(response => response.json())
            .then(data => {
                if (data.results) {
                    setResultss(data.results);
                    console.log("Data:", data)
                } else {
                    setResultss([data]); // Handle cases where results might not be present
                }
            })
            .catch(error => setError(error));
    }, [category, id]);
    //This condition specifies the message if there is an error with fetching the data
    if (error) return <div>These aren't the droids you're looking for</div>;


    return (
        <>
            {/* //Checks if the results array is not empty, and if not maps through  */}
            {resultss.length > 0 ? (
                resultss.map((result, index) => (
                    <div key={index}>
                        {/* Slice the array to retrieve the values of only the first four keys */}
                        {category === 'people' ? (
                            <>
                                <p><span className='fw-bold text-capitalize my-3'>Homeworld: </span><Link to={`/${result.homeworld}`}> {result.homeworld}</Link> </p>
                                {Object.keys(result).slice(0, 4).map((key) => (
                                    <p key={key}>
                                        <span className='fw-bold text-capitalize'>{key}: </span>
                                        {result[key]}
                                    </p>
                                ))}
                            </>
                        ) : (
                            Object.keys(result).slice(0, 4).map((key) => (
                                <p key={key}>
                                    <span className='fw-bold text-capitalize'>{key}: </span>
                                    {result[key]}
                                </p>
                            ))
                        )}
                    </div>
                ))
            ) : (
                // If data received was an empty array then return this message 
                <div>No results found</div>
            )}
        </>
    );
};

export default View;
