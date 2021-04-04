import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const styles = {
  ul: {
    listStyle: "none",
    padding: 0,
  },
};

function TodoList({ todos, onToggle }) {
  return (
    <ul className="todo-items" style={styles.ul}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onChange={onToggle} />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TodoList;
