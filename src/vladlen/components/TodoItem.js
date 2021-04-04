import React, { useContext } from "react";
import Context from "../helpers/Context";
import PropTypes from "prop-types";

function TodoItem({ todo, onChange }) {
  const { removeTodo } = useContext(Context);
  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }

  return (
    <li className="todo-item">
      <label>
        <input
          type="checkbox"
          onChange={() => onChange(todo.id)}
          checked={todo.completed}
        />

        <span className={classes.join(" ")}>
          <strong>{todo.id}</strong> {todo.title}
        </span>
      </label>

      <button onClick={removeTodo.bind(null, todo.id)}>&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
