import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import AddTask from './components/AddTask.js';
import TaskButton from './components/TaskButton.js';
import {useState}  from 'react';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
  {
    id: 3,
    title: 'Do Laundry',
    isComplete: true,
  },
  {
    id: 4,
    title: 'Go Shopping',
    isComplete: false,
  },
  {
    id: 5,
    title: 'Clean House',
    isComplete: false,
  },
  {
    id: 6,
    title: 'Walk Dog',
    isComplete: true,
  },
];

const App = () => {

  const [taskData, setTaskData]= useState(TASKS);

  const onComplete = (id) => {
    const completed = taskData.map((task)=>{
      if(task.id === id){
        return {...task, isComplete: !task.isComplete};
      } else {
        return task;
      }
    });
    setTaskData(completed);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div><TaskList tasks={taskData} onComplete = {onComplete} /></div>
        <div><AddTask/></div>
        <div><TaskButton/></div>
      </main>
    </div>
  );
};

export default App;
