import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  function addTask(e) {
    e.preventDefault();
    const t = task.trim();
    if (t) setTodos((arr) => [...arr, t]);
    setTask("");
  }

  return (
    <div>
      <h1>Todo Study List</h1>
      <form onSubmit={addTask}>
        <input value={task} onChange={(e) => setTask(e.target.value)} />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
