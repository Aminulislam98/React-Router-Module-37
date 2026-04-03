import React from "react";

const Products = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 px-5 gap-10 my-5">
      <h1 className="bg-gray-200 border-2 border-gray-400 p-8 rounded-2xl flex justify-center items-center text-xl font-semibold">
        product 1{" "}
      </h1>
      <h1 className="bg-gray-200 border-2 border-gray-400 p-8 rounded-2xl flex justify-center items-center text-xl font-semibold">
        product 2
      </h1>
      <h1 className="bg-gray-200 border-2 border-gray-400 p-8 rounded-2xl flex justify-center items-center text-xl font-semibold">
        product 3{" "}
      </h1>
    </div>
  );
};

export default Products;
