
import React from "react";

function TaskItem({ item, onDelete, onToggle }) {
  return (
    <div style={{ color: item.completed ? "blue" : "red" }}>
      {item.task} - Assigned to: {item.taskAssignedTo}
      <button onClick={onDelete}>Delete Task</button>
      <button onClick={onToggle}>Toggle Task</button>
    </div>
  );
}

export default TaskItem;
