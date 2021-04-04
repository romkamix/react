import React, { useState, useEffect } from "react";
import Context from "./helpers/Context";
import Loader from "./helpers/Loader";
// import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Modal from "./components/Modal";

const AddTodo = React.lazy(() => import("./components/AddTodo"));

export default function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((json) => {
        setTodos(json);
        setLoading(false);
      });
  }, []);

  function onToggle(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function onCreate(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React Tutorial</h1>

        <Modal />

        <React.Suspense fallback={<Loader />}>
          <AddTodo onCreate={onCreate} />
        </React.Suspense>

        {loading && <Loader />}

        {todos.length === 0 ? (
          !loading && <p>NO TODOS</p>
        ) : (
          <TodoList todos={todos} onToggle={onToggle} />
        )}
      </div>
    </Context.Provider>
  );
}
