import React, { Suspense, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import ShowData from "../ShowData/ShowData";

const Todo = ({ todo }) => {
  const navigate = useNavigate(0);
  const handleNavigate = () => {
    navigate("/Users");
  };
  const [toggle, setToggle] = useState(false);

  const todoPromise = fetch(
    `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
  ).then((res) => res.json());

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
        <button className="btn" onClick={() => setToggle(!toggle)}>
          {toggle ? "Hide" : "Show"}Data
        </button>
      </div>
      <div>
        {toggle && (
          <Suspense callback={<small>Loading...</small>}>
            <ShowData todoPromise={todoPromise} key={todoPromise.id}></ShowData>
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default Todo;
