import React from 'react';
import './AddTask.css';

const AddTask = () => {
    return (
        <div>
            <h1>Add a Task</h1>
            <label htmlFor="name">Title</label>
            <input type="text" id="name"></input>
            <label htmlFor="complete">isComplete</label>
            <select id="complete">
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
        </div>
    );
};

export default AddTask;