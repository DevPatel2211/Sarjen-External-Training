import React, { useState } from "react";

// --- Todo with State ---
function TodoState() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function addTodo() {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput("");
  }

  function deleteTodo(id) {
    setTodos(todos.filter((t) => t.id !== id));
  }

  return (
    <div>
      <h3>Todo (State)</h3>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add todo" />
      <button onClick={addTodo}>Add TODO</button>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            {t.text} <button onClick={() => deleteTodo(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// --- Todo with LocalStorage ---
function TodoLocalStorage() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");

  function save(updated) {
    setTodos(updated);
    localStorage.setItem("todos", JSON.stringify(updated));
  }

  function addTodo() {
    if (!input.trim()) return;
    save([...todos, { id: Date.now(), text: input }]);
    setInput("");
  }

  function deleteTodo(id) {
    save(todos.filter((t) => t.id !== id));
  }

  return (
    <div>
      <h3>Todo (LocalStorage)</h3>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add todo" />
      <button onClick={addTodo}>Add TODO</button>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            {t.text} <button onClick={() => deleteTodo(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TodoApp() {
  return (
    <div>
      <h2>Task 12 - Todo Application</h2>
      <TodoState />
      <hr />
      <TodoLocalStorage />
    </div>
  );
}

export default TodoApp;
