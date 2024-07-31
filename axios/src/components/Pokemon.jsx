import { useState } from 'react'
import axios from 'axios';
const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    const fetching = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
        .then(response => {
            setPokemon(response.data.results);
        })
        .catch(err => {
            console.error(err);
        });
    }
    return (
      
         
        <>
            <button className="btn btn-danger text-white px-5 mb-3 fw-bold"  onClick={fetching}>Fetch Pokemon</button>
            <div>
                <ul>
                    {pokemon.length > 0 && pokemon.map((poke, index) => (
                        <li key={index} className="text-capitalize">{poke.name}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Pokemon