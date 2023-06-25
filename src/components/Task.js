import React from 'react';
import PropTypes from 'prop-types';
import './TaskButton.css';

import './Task.css';

const Task = (props) => {
  const buttonClass = props.isComplete ? 'tasks__item__toggle--completed' : '';
  
  return (
    <li className="tasks__item">
      <button onClick={()=> props.compFunct(props.id)} 
      className={`tasks__item__toggle ${buttonClass}`}>{props.title}</button>
       <button type='button' id='button' onClick= {()=> props.inCompFunct(props.id)}>incomplete</button>
      <button className="tasks__item__remove button" onClick={()=> props.onDelete(props.id)}>x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  isComplete: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  compFunct:PropTypes.func.isRequired,
  inCompFunct:PropTypes.func.isRequired,
  onDelete: PropTypes.func
};

export default Task;