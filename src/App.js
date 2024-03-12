import React, { useState } from 'react';
// import TaskList from './components/TaskList';
// import TaskForm from './components/TaskForm';
import './App.css';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';

function App() {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Task 1', description: 'Description 1', status: 'Added' },
    { id: '2', title: 'Task 2', description: 'Description 2', status: 'Added' },
    { id: '3', title: 'Task 3', description: 'Description 3', status: 'Started' },
    { id: '4', title: 'Task 4', description: 'Description 4', status: 'Completed' }
  ]);

  // const onAddTask = (newTask) => {

  //   setTasks([...tasks, newTask]);
  // };


  const onAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  

  return (
    <div className="App">
      <h1>Task Management App</h1>
      <TaskForm onAddTask={onAddTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
