import React from 'react';
import './TaskCounters.css';

const TaskCounters = ({ tasks }) => {
  const counts = {
    'To Do': tasks.filter(task => task.status === 'To Do').length,
    'In Progress': tasks.filter(task => task.status === 'In Progress').length,
    'Done': tasks.filter(task => task.status === 'Done').length
  };

  return (
    <div className="task-counters">
      <p>To Do: {counts['To Do']}</p>
      <p>In Progress: {counts['In Progress']}</p>
      <p>Done: {counts['Done']}</p>
    </div>
  );
};

export default TaskCounters;
