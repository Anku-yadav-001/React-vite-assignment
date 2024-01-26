// TaskItem.jsx
import React from "react";

function TaskItem({ item, onDelete, onToggle }) {
  return (
    <div style={{ color: item.completed ? "green" : "black" }}>
      {item.task} - Assigned to: {item.taskAssignedTo}
      <button onClick={onDelete}>Delete Task</button>
      <button onClick={onToggle}>Toggle Task</button>
    </div>
  );
}

export default TaskItem;
