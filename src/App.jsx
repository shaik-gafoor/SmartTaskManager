import React, { Component } from "react";
import Header from "./assets/components/Header";
import TaskForm from "./assets/components/TaskForm";
import TaskList from "./assets/components/TaskList";
import TaskDetails from "./assets/components/TaskDetails";
class App extends Component {
  state = {
    tasks: JSON.parse(localStorage.getItem("tasks")) || [],
    selectedTask: null,
    filter: "all",
  };

  componentDidUpdate(_, prevState) {
    if (prevState.tasks !== this.state.tasks) {
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    }
  }

  addTask = (task) => {
    this.setState({ tasks: [...this.state.tasks, task] });
  };

  deleteTask = (id) => {
    this.setState({ tasks: this.state.tasks.filter((t) => t.id !== id) });
  };

  selectTask = (task) => {
    this.setState({ selectedTask: task });
  };

  toggleComplete = (id) => {
    const updated = this.state.tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    this.setState({ tasks: updated });
  };

  setFilter = (filter) => {
    this.setState({ filter });
  };

  getFilteredTasks = () => {
    const { tasks, filter } = this.state;
    if (filter === "done") return tasks.filter((t) => t.completed);
    if (filter === "pending") return tasks.filter((t) => !t.completed);
    return tasks;
  };

  render() {
    return (
      <div className="container">
        <Header title="Smart Task Manager" onFilter={this.setFilter} />
        <TaskForm onAdd={this.addTask} />
        <TaskList
          tasks={this.getFilteredTasks()}
          onDelete={this.deleteTask}
          onToggle={this.toggleComplete}
          onSelect={this.selectTask}
        />
        {this.state.selectedTask && (
          <TaskDetails task={this.state.selectedTask} />
        )}
      </div>
    );
  }
}

export default App;
