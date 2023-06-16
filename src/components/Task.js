import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';

const Task = ({ id, title, isComplete, changeStatus, deleteTask }) => {
  
  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => changeStatus(id, isComplete)}
      >
        {title}
      </button>
      <button onClick={() => deleteTask(id)} className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  changeStatus: PropTypes.func,
  deleteTask: PropTypes.func,
};


export default Task;
