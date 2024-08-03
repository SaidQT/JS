import { useState } from 'react'
import './App.css'
import Task from './components/Task.jsx'
import Form from './components/Form.jsx'

function App() {
  const [tasks, setTasks] = useState([])
  const addTask = (task) => {
    setTasks([...tasks, {task:task, done:false}])
  }

  const removeTask = (taskToRemove) => {
    setTasks(tasks.filter(task => task !== taskToRemove));
  }

  return (
    <>
      <Form onNewTask={ addTask }></Form>
      <Task task={tasks} remove={ removeTask }></Task>
    </>
  )
}

export default App
