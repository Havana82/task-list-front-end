import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import AddTask from './components/AddTask.js';
import TaskButton from './components/TaskButton.js';
import {useState, useEffect}  from 'react';
import axios from 'axios';

const kBaseUrl = 'https://task-list-api-c17.onrender.com';

const getAllTasks = () => {
  return axios.get(`${kBaseUrl}/tasks`)
    .then((response)=>{
        return response.data;
    })
    .catch((error)=>{
        console.log(error);
    });
};

// const TASKS = [
//   {
//     id: 1,
//     title: 'Mow the lawn',
//     isComplete: false,
//   },
//   {
//     id: 2,
//     title: 'Cook Pasta',
//     isComplete: true,
//   },
//   {
//     id: 3,
//     title: 'Do Laundry',
//     isComplete: true,
//   },
//   {
//     id: 4,
//     title: 'Go Shopping',
//     isComplete: false,
//   },
//   {
//     id: 5,
//     title: 'Clean House',
//     isComplete: false,
//   },
//   {
//     id: 6,
//     title: 'Walk Dog',
//     isComplete: true,
//   },
// ];

const App = () => {

  const [taskData, setTaskData]= useState([]);
  const fetchTasks = () =>{
    getAllTasks()
      .then((tasks) =>{
        setTaskData(tasks);
      }

      );
  };



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
  const deleteTask = (id) =>{
    const newTaskList = taskData.filter((ele) => ele.id != id);
    setTaskData(newTaskList);
  };

  useEffect(()=>{
    fetchTasks();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div><TaskList tasks={taskData} onComplete = {onComplete} taskDelete = {deleteTask}/></div>
        <div><AddTask/></div>
        <div><TaskButton/></div>
      </main>
    </div>
  );
};

export default App;
