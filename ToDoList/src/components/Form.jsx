import { useState } from 'react'

const Task = (props) => {
    const [task, setTask] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewTask( task );
        setTask("");
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='d-flex flex-column align-items-end'>
                <div>
                    <label className='mx-3 fw-bold'>Task: </label>
                    <input type="text" value={task} onChange={(e) => setTask(e.target.value)} className="p-2" />
                </div>
                <button className='btn btn-primary my-3 w-25 '>Add</button>
            </form>
        </>
    )
}

export default Task