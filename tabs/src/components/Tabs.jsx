import { useState } from 'react'

const Tabs = () => {
    const tabs = ["Tab 1", "Tab 2", "Tab 3"];
    const [clicked, setClicked] = useState(false);
    const[message,setMessage]= useState("")
    
    const handleClick = (e) => {
        if (e.target.id == "Tab 1"){
            setMessage("Tab 1 is showing here")
        }
        else if(e.target.id == "Tab 2"){
            setMessage("Tab 2 is showing here")
        }
        else if(e.target.id == "Tab 3"){
            setMessage("Tab 3 is showing here")
        }
        
        setClicked(true);
    }
    const styling= {height: '200px'}

    return (
        <>
            <div className='d-flex justify-content-between'>
                {tabs.map((item,index) =>
                     <button className="btn btn-dark m-2 px-5 py-1 btn-lg" onClick={ handleClick } id={item} key={ index }>{item}</button>
                )}
            </div>
            {clicked ?
                <div className="mt-3 border border-seconday text-start" style={ styling }> 
                     <p className='fw-bold'>{ message }</p> 
                </div>
                :
                ""
            }

        </>
    )
}

export default Tabs