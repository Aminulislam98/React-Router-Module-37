import React from "react";

const Laptops = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 px-5 gap-10 my-5">
      <h3 className="bg-gray-200 border-2 border-gray-400 p-8 rounded-2xl flex justify-center items-center text-xl font-semibold">
        Apple macbook Air
      </h3>
      <h3 className="bg-gray-200 border-2 border-gray-400 p-8 rounded-2xl flex justify-center items-center text-xl font-semibold">
        Apple macbook Pro
      </h3>
      <h3 className="bg-gray-200 border-2 border-gray-400 p-8 rounded-2xl flex justify-center items-center text-xl font-semibold">
        Apple macbook Neo
      </h3>
    </div>
  );
};

export default Laptops;
