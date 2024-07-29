
import { useState } from 'react';

const PersonCard = (props) => {
    const [age, setAge] = useState(props.age); 

    const handleClick = () => {
        setAge(age + 1);
    }
    const { lastName, firstName, hairColor } = props;
    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p> 
            <p>Hair color: { hairColor }</p>
            <button onClick={handleClick}>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    );
}

export default PersonCard;
