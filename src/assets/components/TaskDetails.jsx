import React, { Component } from "react";

class TaskDetails extends Component {
  componentDidMount() {
    console.log("Viewing task:", this.props.task.title);
  }

  componentWillUnmount() {
    console.log("Closing details view.");
  }
  render() {
    const { task } = this.props;
    return (
      <div className="alert alert-info mt-3">
        <h4>{task.title}</h4>
        <p>{task.description}</p>
        <small>Due: {task.due}</small>
      </div>
    );
  }
}
export default TaskDetails;
