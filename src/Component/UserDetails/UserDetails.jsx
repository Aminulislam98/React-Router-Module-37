import React from "react";
import { useLoaderData } from "react-router";

const UserDetails = () => {
  const userData = useLoaderData();
  console.log(userData);
  return (
    <div className="flex text-green-800 flex-col justify-center items-center p-10 rounded-2xl border-2 border-green-300 bg-green-100 m-20">
      <p className="font-semibold text-green-700">User Name</p>
      {userData.name}
    </div>
  );
};

export default UserDetails;
