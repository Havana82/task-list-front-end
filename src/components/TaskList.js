import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';

const TaskList = (props) => {
  const getTask = props.tasks.map((task) => {
      return (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          isComplete={task.is_complete}
          compFunct = {props.onComplete}
          inCompFunct = {props.onInComplete}
          onDelete = {props.taskDelete}
        />
      );
  }
  );
  
  return <ul className="tasks__list no-bullet">{getTask}</ul>;
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onComplete : PropTypes.func.isRequired,
  taskDelete : PropTypes.func.isRequired,
  onInComplete: PropTypes.func
};

export default TaskList;
