
const Task = (props) => {
    const tasks = props.task;
    
     
    return (
        <>
            {tasks.map((item, index) => (
                <div key={index} className="d-flex justify-content-evenly">
                    {done ?
                    <p><del>{item.task}</del></p>:
                    <p>{item.task}</p>
}
                    <input 
                        type="checkbox" 
                        checked={item.done} 
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
