import React, { Component } from "react";
import TaskItem from "./TaskItem";

class TaskList extends Component {
  render() {
    const { tasks, onDelete, onToggle, onSelect } = this.props;
    return tasks.length ? (
      tasks.map((t) => (
        <TaskItem
          key={t.id}
          task={t}
          onDelete={onDelete}
          onToggle={onToggle}
          onSelect={onSelect}
        />
      ))
    ) : (
      <p className="text-muted">No tasks to show.</p>
    );
  }
}
export default TaskList;
