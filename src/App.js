import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState } from 'react';

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
];

const App = () => {
  const [tasks, setTasks] = useState(TASKS);

  const changeStatus = (id, completeStatus) => {
    console.log('changeStatus called');
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        const updatedTask = { ...task };
        if (completeStatus === false) {
          updatedTask.isComplete = true;
        } else {
          updatedTask.isComplete = false;
        }
        return updatedTask;
      } else {
        return { ...task };
      }
    });
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div><TaskList tasks={tasks} changeStatus={changeStatus}/></div>
      </main>
    </div>
  );
};

export default App;
