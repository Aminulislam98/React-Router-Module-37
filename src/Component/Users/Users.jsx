import React from "react";
import { useLoaderData } from "react-router";

const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      {users.map((user) => {
        return <h1>{user.name}</h1>;
      })}
    </div>
  );
};

export default Users;
