import React from "react";
import { useLoaderData } from "react-router";
import Todo from "../Todo/Todo";

const Todos = () => {
  const todos = useLoaderData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-5">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo}></Todo>
      ))}
    </div>
  );
};

export default Todos;
