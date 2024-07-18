import React, { useState } from 'react';
import './Task.css';

const Task = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTask(editedTask);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  const handleToggleComplete = () => {
    updateTask({ ...task, isComplete: !task.isComplete });
  };

  return (
    <div className={`task ${task.isComplete ? 'complete' : ''}`}>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="text"
            value={editedTask.text}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <span>{task.text}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleToggleComplete}>
            {task.isComplete ? 'Incomplete' : 'Complete'}
          </button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Task;
