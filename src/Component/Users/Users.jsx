import React from "react";
import { useLoaderData } from "react-router";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5">
      {users.map((userDetails) => (
        <User userDetails={userDetails} key={userDetails.id}></User>
      ))}
    </div>
  );
};

export default Users;
