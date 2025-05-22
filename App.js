import './App.css';
import { useState } from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask.trim(), done: false }]);
      setNewTask("");
    }
  }

  function toggleTaskDone(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  }

  function deleteTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Vložte svojí věc..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button onClick={addTask}>Přidat</button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`task-item ${task.done ? "done" : ""}`}
          >
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTaskDone(index)}
            />
            <span>{task.text}</span>
            <button onClick={() => deleteTask(index)}>🗑️</button>
            <button onClick={() => moveTaskUp(index)}>🔼</button>
            <button onClick={() => moveTaskDown(index)}>🔽</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
