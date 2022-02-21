import React from 'react';

export default function Tab(props) {
  const { all, active, completed } = props.tabState;
  const styles = {
    color: all ? 'darkcyan' : 'initial',
  };
  const styleActive = {
    color: active ? 'darkcyan' : 'initial',
  };
  const styleCompleted = {
    color: completed ? 'darkcyan' : 'initial',
  };
  return (
    <footer className="tabs">
      <div>
        <button onClick={props.all} style={styles}>
          All
        </button>
        <button onClick={props.active} style={styleActive}>
          Active
        </button>
        <button onClick={props.completed} style={styleCompleted}>
          Completed
        </button>
      </div>
    </footer>
  );
}
