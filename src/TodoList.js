import React, { useState } from "react";
import ToDoForm from "./NewTodoForm";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, { id: uuidv4(), task: newTask }]);
  };

  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <ToDoForm addTask={addTask} />

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <button onClick={() => removeTask(task.id)}>X</button>
            {task.task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
