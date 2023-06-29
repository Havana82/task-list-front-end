import React, {useState} from 'react';
import './AddTask.css';
import PropTypes from 'prop-types'

const AddTask = (props) => {
    const[taskName, setTaskName] = useState('');
    const taskInput = (event) =>{
        setTaskName(event.target.value);
    };
    const onSubmit = (event) =>{
        event.preventDefault();
        const newTask = {
        title:taskName,
        description: '',
       };
    
        props.handleSubmit(newTask);
        setTaskName('');};
    return (
        <form onSubmit={onSubmit}>
            <h1>Add a Task</h1>
            <h2>{taskName}</h2>
            <label htmlFor="name">Title</label>
            <input type="text" id="name" name='name' onChange={taskInput} value={taskName}></input>
            <label htmlFor="complete">isComplete</label>
            <select id="complete">
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            <div>
            <input type="submit"  value="Add Task"/>
            </div>
        </form>
    );
};

AddTask.propTypes = {
    handleSubmit: PropTypes.func
};
export default AddTask;