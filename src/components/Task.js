import React from 'react';

function Task({ task, onDelete }) {
  return (
    <div className="task">
      <p>{task.text}</p>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

export default Task;
