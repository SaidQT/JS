import { useState } from 'react';
import StyledBox from './StyledBox';

const Box = () => {
    const [color, setColor] = useState("");
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [errors, setErrors] = useState([]);
    const [colors, setColors] = useState([]);
    const [containsErrors, setContainsErrors] = useState(true);

    const handleColor = (e) => {
        setColor(e.target.value);
        let newErrors = [...errors];
        if (color.length < 1) newErrors[0] = "Color is required!";
        else if (color.length < 2) newErrors[0] = "Color must be 3 characters or longer!";
        else newErrors[0] = "";
        setErrors(newErrors);
        setContainsErrors(newErrors.some(error => error !== ""));
    }

    const handleHeight = (e) => {
        setHeight(e.target.value);
        console.log(typeof(height))
        console.log(height)
        let newErrors = [...errors];
        if (height < 50) newErrors[1] = "Height must be at least 50";
        else newErrors[1] = "";
        setErrors(newErrors);
        setContainsErrors(newErrors.some(error => error !== ""));
    }

    const handleWidth = (e) => {
        setWidth(e.target.value);
        let newErrors = [...errors];
        if (width < 50) newErrors[2] = "Width must be at least 50";
        else newErrors[2] = "";
        setErrors(newErrors);
        setContainsErrors(newErrors.some(error => error !== ""));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!containsErrors) {
            const newBox = { color, width, height };
            setColors([...colors, newBox]);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className="d-flex justify-content-around my-1">
                        <label className='mx-1'>Color: </label>
                        <input type="text" value={ color } onChange={ handleColor } />

                    </div>
                    {
                        errors[0] && <p>{errors[0]}</p>
                    }
                    <div className="d-flex justify-content-around my-1">
                        <label className='mx-1'>Height: </label>
                        <input type="number" value={ height } onChange={ handleHeight } />

                    </div>
                    {
                        errors[1] && <p>{errors[1]}</p>
                    }
                    <div className="d-flex justify-content-around my-1">
                        <label className='mx-1'>Width: </label>
                        <input type="number" value={ width } onChange={ handleWidth } />

                    </div>
                    {
                        errors[2] && <p>{errors[2]}</p>
                    }
                </div>
                <input type="submit" value="Add" disabled={containsErrors} />
            </form>
            <div className='row my-2'>
                {colors.map((box, index) => (
                    <StyledBox key={ index } backGroundColor={ box.color } width={ box.width } height={ box.height } className="mx-3"></StyledBox>
                ))}
            </div>
        </div>
    )
}

export default Box;
