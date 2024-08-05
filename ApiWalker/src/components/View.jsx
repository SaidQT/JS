import { useEffect, useState } from 'react';
import {
    Link
} from "react-router-dom";

const View = (props) => {
    //Extract the values of category and id using the { useParams } hook.
    //This variable is where the fetch data is saved.
    const [resultss, setResultss] = useState([]);
    //If there is an error in fetching, this variable is used to save the error
    const [error, setError] = useState(null);

    const { dataCat, dataID } = props

    //This function is used to fetch the api using category and id in the url parameters
    useEffect(() => {
        fetch(`https://swapi.dev/api/${dataCat}/${dataID}`)
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
    }, [dataCat, dataID]);
    //This condition specifies the message if there is an error with fetching the data
    if (error) return <div><p>These aren't the droids you're looking for</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SdMp49TSaiAa2B8S2_giTnvPio-bHEppLw&s"></img></div>;


    return (
        <>
            {/* //Checks if the results array is not empty, and if not maps through  */}
            {resultss.length > 0 ? (
                resultss.map((result, index) => (
                    <div key={index}>
                        {/* Slice the array to retrieve the values of only the first four keys */}
                        {dataCat === 'people' ? (
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
                <div><p>These aren't the droids you're looking for</p>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SdMp49TSaiAa2B8S2_giTnvPio-bHEppLw&s"></img></div>
            )}
        </>
    );
};

export default View;
