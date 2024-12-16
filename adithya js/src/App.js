import React, { useState, useEffect } from 'react';
import TaskTable from './components/TaskTable';
import AddTaskForm from './components/AddTaskForm';
import FilterOptions from './components/FilterOptions';
import './styles/App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20');
      const formattedTasks = response.data.map(task => ({
        id: task.id,
        title: task.title,
        description: 'No Description',
        status: task.completed ? 'Done' : 'To Do'
      }));
      setTasks(formattedTasks);
    };
    fetchTasks();
  }, []);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map(task => (task.id === updatedTask.id ? updatedTask : task));
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const filteredTasks = filter ? tasks.filter(task => task.status === filter) : tasks;

  return (
    <div className="container">
      <h1>Task List Manager</h1>
      <AddTaskForm addTask={addTask} />
      <FilterOptions setFilter={setFilter} />
      <TaskTable tasks={filteredTasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
