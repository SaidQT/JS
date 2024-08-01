import { useState } from 'react';

const Task = (props) => {
    const [done, setDone] = useState(false);
    const tasks = props.task;

    return (
        <>
            {tasks.map((item, index) => (
                <div key={index}>
                    {done?
                    <p><del>{item}</del></p>:
                    <p>{item}</p>
}
                    <input 
                        type="checkbox" 
                        checked={done} 
                        onChange={e => setDone(e.target.checked)} 
                    />
                </div>
            ))}
        </>
    );
};

export default Task;
