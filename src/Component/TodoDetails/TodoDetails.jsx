import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const TodoDetails = () => {
  const todoDetails = useLoaderData();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/Todos");
  };
  return (
    <div className="flex text-pink-800 flex-col justify-center gap-y-3 items-center p-10 rounded-2xl border-2 border-pink-300 bg-pink-100 m-20">
      <p className="font-semibold text-pink-700">Todo's Title</p>
      {todoDetails.title.toUpperCase()}
      <div className="flex justify-center items-center w-full">
        <button onClick={handleNavigate} className="btn btn-accent">
          Go to Todos Home section
        </button>
      </div>
    </div>
  );
};

export default TodoDetails;
