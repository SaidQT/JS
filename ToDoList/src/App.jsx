import { useState, useEffect, useRef} from 'react'
import './App.css'
import Task from './components/Task.jsx'
import Form from './components/Form.jsx'

function App() {
  const [tasks, setTasks] = useState([])
  
  const addTask = (task) => {
    setTasks([...tasks, { task: task, done: false }])
  }

  const [firstRender,setFirstRender]= useState(true)

  useEffect(() => {
  if (firstRender) {
    setFirstRender(false);
    const savedItems = JSON.parse(localStorage.getItem('tasks'));

    if (savedItems) {
      setTasks(savedItems);
    }
  } else {
    // Save the list to localStorage whenever it changes
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}, [tasks]);

  const updateTask = (taskToUpdate) => {
    // Find the task to update
    const updatedTasks = tasks.map(task =>
      task === taskToUpdate ? { ...task, done: !task.done } : task
    );

    // Update the state with the new tasks array
    setTasks(updatedTasks);
  };


  const removeTask = (taskToRemove) => {
    setTasks(tasks.filter(task => task !== taskToRemove));
  }


  return (
    <>
      <Form onNewTask={addTask}></Form>
      <Task task={tasks} remove={removeTask} update={updateTask}></Task>
    </>
  )
}

export default App
