import { useState } from 'react'
import './App.css'
import Task from './components/Task.jsx'
import Form from './components/Form.jsx'

function App() {
  const [tasks,setTasks] = useState([])
  const addTask = ( task ) => {
    setTasks([...tasks, task])
}
  return (
    <>
      <Form onNewTask = { addTask }></Form>
      <Task task = { tasks }></Task>
    </>
  )
}

export default App
