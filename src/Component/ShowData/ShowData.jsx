import React, { use } from "react";

const ShowData = ({ todoPromise }) => {
  const todoData = use(todoPromise);

  return <div>{todoData.title}</div>;
};

export default ShowData;
