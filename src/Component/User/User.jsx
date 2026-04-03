import React from "react";
import { Link } from "react-router";
const User = ({ userDetails }) => {
  const { id, name, email, username } = userDetails;

  return (
    <div className="border-2 border-green-300 bg-green-50 rounded-2xl p-4">
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{username}</p>
      <div className="flex flex-row justify-center items-center gap-2">
        <Link to={`/Users/${id}`} className="btn btn-active mt-4">
          Show details
        </Link>
      </div>
    </div>
  );
};

export default User;
