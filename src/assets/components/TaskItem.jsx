function TaskItem({ task, onDelete, onToggle, onSelect }) {
  return (
    <div className={`card mb-2 ${task.completed ? "border-success" : ""}`}>
      <div className="card-body">
        <h5
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.title}
        </h5>
        <button
          className="btn btn-sm btn-info mx-1"
          onClick={() => onSelect(task)}
        >
          Details
        </button>
        <button
          className="btn btn-sm btn-success mx-1"
          onClick={() => onToggle(task.id)}
        >
          Toggle
        </button>
        <button
          className="btn btn-sm btn-danger mx-1"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default TaskItem;
