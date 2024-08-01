import { useState } from 'react';

const Task = (props) => {
    const [done, setDone] = useState(false);
    const tasks = props.task;
     
    return (
        <>
            {tasks.map((item, index) => (
                <div key={index} className="d-flex justify-content-evenly">
                    {done ?
                    <p><del>{item}</del></p>:
                    <p>{item}</p>
}
                    <input 
                        type="checkbox" 
                        checked={done} 
                        onChange={e => setDone(e.target.checked)} 
                        className="mx-2" 
                    />
                 <button onClick={()=>props.remove(item)} className="btn btn-danger">Remove</button> 
                </div>
            ))}
        </>
    );
};

export default Task;
