import React from "react";
import { Link } from "react-router";

const User = ({ userDetails }) => {
  const { id, name, email, username } = userDetails;
  return (
    <div className="border-2 border-green-300 bg-green-50 rounded-2xl p-4">
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{username}</p>
      <Link to={`/Users/${id}`} className="btn btn-active mt-4">
        Show details
      </Link>
    </div>
  );
};

export default User;
