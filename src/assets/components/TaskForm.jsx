import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
class TaskForm extends Component {
  state = { title: "", description: "", due: "" };
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.title) return alert("Title is required");
    const task = { ...this.state, id: uuidv4(), completed: false };
    this.props.onAdd(task);
    this.setState({ title: "", description: "", due: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="mb-4">
        <input
          className="form-control mb-2"
          name="title"
          placeholder="Title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          className="form-control mb-2"
          name="description"
          placeholder="Description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <input
          className="form-control mb-2"
          type="date"
          name="due"
          value={this.state.due}
          onChange={this.handleChange}
        />
        <button className="btn btn-primary">Add Task</button>
      </form>
    );
  }
}
export default TaskForm;
