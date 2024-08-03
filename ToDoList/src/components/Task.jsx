
const Task = (props) => {
    const tasks = props.task;
    const update = props.update
    
    return (
        <>
            {tasks.map((item, index) => (
                <div key={index} className="row my-2">
                    {item.done ?
                    <p className="col-6"><del>{item.task}</del></p>:
                    <p className="col-6">{item.task}</p>
}
                    <input 
                        type="checkbox" 
                        checked={item.done} 
                        onChange={() => update(item)} 
                        className="mx-2 col-1" 
                    />
                 <button onClick={() => props.remove(item)} className="btn btn-danger col-4">Remove</button> 
                </div>
            ))}
        </>
    );
};

export default Task;
