import React from "react";

const Todo = props => {
  return (
    <div className="todo-list">
      {props.todos.map(todo => (
        <div className="todo" key={todo.id}>
          <p>{todo.task}</p>
        </div>
      ))}
    </div>
  );
};

//<Todo/> is a component that takes in the todo data and displays the task to the screen. It's probably going to take props from TodoForm.

export default Todo;