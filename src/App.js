import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Todos from './components/Todos';
import Header from './components/Header';
import Tab from './components/Tab';
// Test
export default function App() {
  const localStore = JSON.parse(localStorage.getItem('todos'));
  const [formInput, setFormInput] = useState({
    newTodo: '',
    isDeleteShown: false,
    isCompleted: false,
  });

  const [tabState, setTabState] = useState({
    all: true,
    active: false,
    completed: false,
  });

  const [todos, newTodos] = useState(localStore);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function newTodo(event) {
    const target = event.target;
    const { checked } = target;

    // Update TodoList
    if (checked && formInput.newTodo !== '')
      newTodos(pre => [formInput, ...pre]);
    else {
      document.querySelector('#new-todo').value = '';
      setFormInput(pre => ({
        ...pre,
        newTodo: '',
        isDeleteShown: false,
        isCompleted: false,
      }));
    }
  }
  //Local storage
  // Create todo
  function change(event) {
    const target = event.target;
    const { name } = target;
    setFormInput(pre => ({
      ...pre,
      [name]: target.value,
      id: nanoid(),
    }));
  }

  // Show delete btn
  function hover(id) {
    newTodos(pre =>
      pre.map(state =>
        state.id === id
          ? {
              ...state,
              isDeleteShown: true,
            }
          : state
      )
    );
  }

  // Hide delete btn
  function leave(id) {
    newTodos(pre =>
      pre.map(state =>
        state.id === id
          ? {
              ...state,
              isDeleteShown: false,
            }
          : state
      )
    );
  }

  // Delete todo
  function del(id, e) {
    e.preventDefault();
    newTodos(pre => pre.filter(todo => todo.id !== id));
  }

  // Tab States!
  function all() {
    setTabState(pre => ({
      ...pre,
      all: true,
      active: false,
      completed: false,
    }));
  }

  function active() {
    setTabState(pre => ({
      ...pre,
      all: false,
      active: true,
      completed: false,
    }));
  }
  function completed() {
    setTabState(pre => ({
      ...pre,
      all: false,
      active: false,
      completed: true,
    }));
  }
  // console.log(tabState);

  return (
    <main className="container">
      <Header newTodo={newTodo} change={change} formInput={formInput} />
      <div className="div">
        <Todos
          hover={hover}
          leave={leave}
          todos={todos}
          tabState={tabState}
          setTodo={newTodos}
          del={del}
        />
        <Tab
          todos={todos}
          setTodo={newTodos}
          all={all}
          active={active}
          completed={completed}
          tabState={tabState}
        />
      </div>
    </main>
  ); //No way!
}

function(eve){
  console.log(eve);
}
