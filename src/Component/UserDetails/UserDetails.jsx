import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const UserDetails = () => {
  const userData = useLoaderData();
  console.log(userData);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/Users");
  };
  return (
    <div className="flex text-green-800 flex-col justify-center items-center p-10 rounded-2xl border-2 border-green-300 bg-green-100 m-20">
      <p className="font-semibold text-green-700">User Name</p>
      {userData.name}
      <button onClick={handleNavigate} className="btn btn-primary mt-4">
        Go to User Home section
      </button>
    </div>
  );
};

export default UserDetails;
