import React from "react";
import { useLoaderData } from "react-router";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {users.map((userDetails) => (
        <User userDetails={userDetails}></User>
      ))}
    </div>
  );
};

export default Users;
