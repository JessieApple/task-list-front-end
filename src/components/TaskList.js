import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';

const TaskList = ({tasks, changeStatus, deleteTask }) => {
  const getTaskList = tasks.map((task) => {
      return (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          isComplete={task.isComplete}
          changeStatus={changeStatus}
          deleteTask={deleteTask}
        />
      );
    });
    return <ul className="tasks__list no-bullet">{getTaskList}</ul>;
  };


TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    })
  ).isRequired,
  changeStatus: PropTypes.func,
  deleteTask: PropTypes.func,
};

export default TaskList;
