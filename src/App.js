import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

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
// ];

const App = () => {
  const [tasks, setTasks] = useState([]);

  const API = 'https://task-list-api-c17.onrender.com/tasks';

  useEffect(() => {
    axios.get(API)
      .then((result) => {
        setTasks(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const changeStatus = (id, completeStatus) => {
    console.log('changeStatus called');

    const newCompleteStatus = completeStatus ? false : true;
    
    axios.patch(`${API}/${id}/mark_complete`, { isComplete: newCompleteStatus })
      .then((result) => {
        console.log(result.data);
        const newTasks = tasks.map((task) => {
          if (task.id === id) {
            const updatedTask = { ...task, isComplete: newCompleteStatus };
            // updatedTask.isComplete = !completeStatus;
            // if (completeStatus === false) {
            //   updatedTask.isComplete = true;
            // } else {
            //   updatedTask.isComplete = false;
            // }
            return updatedTask;
          } else {
            return { ...task };
          }
        });
        setTasks(newTasks);
      })
      .catch((error) => {
        console.log(error);
      });
    
    
    // const newTasks = tasks.map((task) => {
    //   if (task.id === id) {
    //     const updatedTask = { ...task };
    //     updatedTask.isComplete = !completeStatus;
    //     // if (completeStatus === false) {
    //     //   updatedTask.isComplete = true;
    //     // } else {
    //     //   updatedTask.isComplete = false;
    //     // }
    //     return updatedTask;
    //   } else {
    //     return { ...task };
    //   }
    // });
    // setTasks(newTasks);

  };

  const deleteTask = (id) => {
    axios.delete(`${API}/${id}`)
      .then((result) => {
        console.log(result);
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
      })
      .catch((error) => {
        console.log(error);
      });
    
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div><TaskList tasks={tasks} changeStatus={changeStatus} deleteTask={deleteTask}/></div>
      </main>
    </div>
  );
};

export default App;
