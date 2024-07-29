
import { useState } from 'react';

const PersonCard = (props) => {
    const [age, setAge] = useState(props.age); 

    const handleClick = () => {
        setAge(age + 1);
    }

    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {age}</p> 
            <p>Hair color: {props.hairColor}</p>
            <button onClick={handleClick}>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    );
}

export default PersonCard;
