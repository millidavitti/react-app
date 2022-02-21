import React from 'react';
import cross from '../images/icon-cross.svg';

export default function TodoItem(props) {
  const styles = {
    textDecoration: props.isChecked ? 'line-through' : 'none',
    backgroud: 'blue',
  };
  return (
    <label
      className="container todo"
      onMouseEnter={props.hover.bind(null, props.id)}
      onMouseLeave={props.leave.bind(null, props.id)}
    >
      <input
        type="checkbox"
        name="toDo"
        id="checkbox"
        checked={props.isChecked}
        onChange={props.done.bind(null, props.id)}
      />
      <span className="checkmark"></span>
      <p className="new-todo" style={styles}>
        {props.newTodo}
      </p>
      {props.isShown && (
        <img
          src={cross}
          onClick={props.del.bind(null, props.id)}
          className="del-note"
        />
      )}
    </label>
  );
}
