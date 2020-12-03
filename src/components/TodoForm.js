import React from "react";

export class TodoForm extends React.Component {
  render() {
    return (
      <div>
        <form id="form">
          <label htmlFor="input">
            <input type="text" name="input" placeholder="New task" />
          </label>
          <button type="submit">Add Todo</button>
          <button type="button">Clear Completed</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
