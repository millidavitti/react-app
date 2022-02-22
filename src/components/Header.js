import React, { useState } from 'react';
import moon from '../images/icon-moon.svg';
import sun from '../images/icon-sun.svg';

export default function (props) {
  const [darkMode, setDarkMode] = useState({ isDark: true });

  const color = {
    bgColor: darkMode.isDark ? 'hsl(235, 21%, 11%)' : 'white',
    textColor: darkMode.isDark ? 'hsl(234, 39%, 85%)' : 'hsl(235, 19%, 35%)',
    bgColorCheck: darkMode.isDark ? 'rgb(83, 83, 83)' : '#ccc',
  };

  const imgSrc = darkMode.isDark ? sun : moon;

  // Dark mode
  function changeTheme(color) {
    setDarkMode(pre => ({ ...pre, isDark: !pre.isDark }));
    const setCSSProperty = document.documentElement.style.setProperty;
    setCSSProperty('--bg-color', color.bgColor);
    setCSSProperty('--text-color', color.textColor);
    setCSSProperty('--bg-color-check', color.bgColorCheck);
  }

  return (
    <header>
      <div>
        <h1>TODO</h1>
        <div className="icon">
          <img src={imgSrc} onClick={changeTheme.bind(null, color)} />
        </div>
      </div>

      <label className="container">
        {/* CheckBox */}
        <input
          type="checkbox"
          name="toDo"
          id="checkbox"
          onChange={props.newTodo}
        />

        <span className="checkmark"></span>
        <input
          type="text"
          name="newTodo"
          id="new-todo"
          onInput={props.change}
          value={props.formInput.newTodo}
          placeholder="Create a new to-do..."
        />
      </label>
    </header>
  );
}
