import React from 'react';
import TodoItem from './TodoItem';

export default function (props) {
  const { todos, setTodo, tabState } = props;

  function clear() {
    setTodo(pre => pre.filter(todo => !todo.isCompleted));
  }

  function doneTodo(id) {
    setTodo(pre =>
      pre.map(todo =>
        todo.id === id
          ? {
              ...todo,
              isCompleted: !todo.isCompleted,
            }
          : todo
      )
    );
  }

  const active = tabState.active
    ? todos.filter(todo => !todo.isCompleted)
    : todos.filter(todo => todo.isCompleted);

  let todoList;

  if (tabState.all) {
    todoList = todos.map(todo => (
      <TodoItem
        key={todo.id}
        id={todo.id}
        newTodo={todo.newTodo}
        isShown={todo.isDeleteShown}
        isChecked={todo.isCompleted}
        hover={props.hover}
        leave={props.leave}
        del={props.del}
        done={doneTodo}
      />
    ));
  } else {
    todoList = active.map(todo => (
      <TodoItem
        key={todo.id}
        id={todo.id}
        newTodo={todo.newTodo}
        isShown={todo.isDeleteShown}
        isChecked={todo.isCompleted}
        hover={props.hover}
        leave={props.leave}
        del={props.del}
        done={doneTodo}
      />
    ));
  }

  return (
    <section className="todo">
      <div className="todo-list">
        {todoList}
        <div className="todo-foot">
          <h2>{todos.filter(todo => !todo.isCompleted).length} items left</h2>
          <button onClick={clear}>Clear Completed</button>
        </div>
      </div>
    </section>
  );
}
