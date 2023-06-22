import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {
  const buttonClass = props.isComplete ? 'tasks__item__toggle--completed' : '';
  return (
    <li className="tasks__item">
      <button onClick={()=> props.taskFunct(props.id)} 
      className={`tasks__item__toggle ${buttonClass}`}>{props.title}</button>
      <button className="tasks__item__remove button" onClick={()=> props.onDelete(props.id)}>x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  isComplete: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  taskFunct:PropTypes.func.isRequired,
  onDelete: PropTypes.func
};

export default Task;