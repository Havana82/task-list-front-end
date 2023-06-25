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


const App = () => {

  const [taskData, setTaskData]= useState([]);
  const fetchTasks = () =>{
    getAllTasks()
      .then((tasks) =>{
        setTaskData(tasks);
      }

      );
  };
  useEffect(()=>{
    fetchTasks();
  }, []);


  const toComplete = (id) => {
     return axios
      .patch(`${kBaseUrl}/tasks/${id}/mark_complete`)
      .then(response=>{
        return response.data;
      })
      .catch((error)=>{
        console.log(error);
      });};
    // const completed = taskData.map((task)=>{
    //   if(task.id === id){
    //     return {...task, isComplete: !task.isComplete};
    //   } else {
    //     return task;
    //   }
    // });
    // setTaskData(completed);
  // };

  const onComplete=(id)=>{
    toComplete(id)
      .then((updatedTask)=>{
        setTaskData((oldTasks)=> {return oldTasks.map((task)=>{
          if(task.id===id){
            return updatedTask;
          }
          return task;
        });
      });
  });
};
  const deleteTask = (id) =>{
    const newTaskList = taskData.filter((ele) => ele.id != id);
    setTaskData(newTaskList);
  };

  
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
