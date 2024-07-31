import { useState } from 'react';
import StyledBox from './StyledBox';

const Box = () => {
    const [color, setColor] = useState("");
    const [colorError, setColorError] = useState("");
    const [colors, setColors] = useState([]);
    

    const handleColor = (e) => {
        e.preventDefault();
        if (color.length < 1) {
            setColorError("Color is required!");
        } else if (color.length < 3) {
            setColorError("Color must be 3 characters or longer!");
        } else {
            setColorError("");
            setColors([...colors, color]);
            setColor(""); 
        }
    }

    const handleChange = (e) => {
        setColor(e.target.value);
        if (e.target.value.length < 1) {
            setColorError("Color is required!");
        } else if (e.target.value.length < 3) {
            setColorError("Color must be 3 characters or longer!");
        } else {
            setColorError("");
        }
    }

    return (
        <div>
            <form onSubmit={ handleColor }>
                <div>
                    <label>Color: </label>
                    <input type="text" value={ color } onChange={ handleChange } />
                    {
                        colorError && <p>{colorError}</p>
                    }
                </div>
                <input type="submit" value="Add" disabled={!!colorError} />
            </form>
            <div className='row my-2'>
                {colors.map((color, index) => (
                    <StyledBox key={index} backGroundColor={color} className=" mx-3 "></StyledBox>
                ))}
            </div>
        </div>
    )
}

export default Box;
