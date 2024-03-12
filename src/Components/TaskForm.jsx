import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    if (!title.trim() || !description.trim()) return;
    console.log("Adding task...");
    onAddTask({ id: Date.now().toString(), title, description, status: 'Added' });
    setTitle('');
    setDescription('');
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'title') {
      setTitle(value);
    } else if (name === 'description') {
      setDescription(value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title"
        name="title"
        value={title}
        onChange={handleInputChange}
      />
      <textarea
        placeholder="Task description"
        name="description"
        value={description}
        onChange={handleInputChange}
      ></textarea>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
