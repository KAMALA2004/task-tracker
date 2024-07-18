import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import './TaskTracker.css';

const TaskTracker = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="task-tracker">
      <div className="task-tracker-header">
        <img src="https://interkef.com/wp-content/uploads/task-management-1024x614.jpg" alt="Task Tracker Banner" className="horizontal-image" />
      </div>
      <div className="task-tracker-content">
        <h1>Task Tracker</h1>
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      </div>
    </div>
  );
};

export default TaskTracker;
