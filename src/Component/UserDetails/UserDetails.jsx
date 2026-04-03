import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const UserDetails = () => {
  const userData = useLoaderData();
  const backNavigate = useNavigate();

  return (
    <div className="flex gap-y-4  text-green-800 flex-col justify-center items-center p-10 rounded-2xl border-2 border-green-300 bg-green-100 m-20">
      <p className="font-semibold text-green-700">User Name</p>
      {userData.name}
      <div className="flex justify-start items-center w-full">
        <button className="btn btn-success " onClick={() => backNavigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
