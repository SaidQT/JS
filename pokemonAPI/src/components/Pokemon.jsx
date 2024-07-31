import { useState } from 'react'
const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    const fetching = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
            .then(response => {
                // not the actual JSON response body but the entire HTTP response
                return response.json();
            }).then(response =>  setPokemon(response.results))
            .catch(err => { console.log(err)});
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