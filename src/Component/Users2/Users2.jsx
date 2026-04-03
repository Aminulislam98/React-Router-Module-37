import React, { use } from "react";

const Users2 = ({ userRes }) => {
  const user = use(userRes);
  return <div>{user.length}</div>;
};

export default Users2;
