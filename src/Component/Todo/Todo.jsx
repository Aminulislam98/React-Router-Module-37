import React from "react";
import { NavLink, useNavigate } from "react-router";

const Todo = ({ todo }) => {
  const navigate = useNavigate(0);
  const handleNavigate = () => {
    navigate("/Users");
  };
  return (
    <div className="p-4 bg-blue-100 border-2 border-blue-400 rounded-xl text-blue-700 flex flex-col justify-center items-center gap-y-4">
      <p>{todo.title.toUpperCase()}</p>

      <div className="flex flex-row justify-center items-center gap-2">
        <NavLink to={`/Todos/${todo.id}`} className="btn  btn-primary">
          Show more details
        </NavLink>
        <button
          className="btn btn-accent"
          onClick={() => {
            handleNavigate();
          }}
        >
          Go to User section
        </button>
      </div>
    </div>
  );
};

export default Todo;
