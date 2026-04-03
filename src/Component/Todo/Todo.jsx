import React from "react";
import { NavLink } from "react-router";

const Todo = ({ todo }) => {
  console.log(todo);
  return (
    <div className="p-4 bg-blue-100 border-2 border-blue-400 rounded-xl text-blue-700">
      <p>{todo.title.toUpperCase()}</p>
      <NavLink to={`/Todos/${todo.id}`} className="btn mt-3 btn-primary">
        Show more details
      </NavLink>
    </div>
  );
};

export default Todo;
