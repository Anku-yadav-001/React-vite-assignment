function TaskItem({ id, title, isCompleted, assignee, priority }) {
    return (
      <div className="task-item">
        <p>{title}</p>
        <p>Assignee : {assignee}</p>
        <p>Priority : {priority}</p>
        <p>
          Is Task Completed :{" "}
          {isCompleted ? (
            <span className="complete">Yes</span>
          ) : (
            <span className="incomplete">No</span>
          )}
        </p>
      </div>
    );
  }
  
  export default TaskItem;