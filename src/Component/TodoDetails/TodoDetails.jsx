import React from "react";
import { useLoaderData } from "react-router";

const TodoDetails = () => {
  const todoDetails = useLoaderData();
  return (
    <div className="flex text-pink-800 flex-col justify-center items-center p-10 rounded-2xl border-2 border-pink-300 bg-pink-100 m-20">
      <p className="font-semibold text-pink-700">Todo's Title</p>
      {todoDetails.title.toUpperCase()}
    </div>
  );
};

export default TodoDetails;
