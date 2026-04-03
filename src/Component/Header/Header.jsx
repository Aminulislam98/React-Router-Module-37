import React from "react";
import { Link, NavLink } from "react-router";
import "../../../src/App.css";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 mb-5">
      <nav className="flex flex-row justify-between px-10 py-5 items-center gap-3  bg-blue-300 shadow-md text-blue-800 text-base font-semibold">
        <NavLink to={"/Laptops"}>Laptop</NavLink>
        <NavLink to={"/Mobiles"}>Mobiles</NavLink>
        <NavLink to={"/Products"}>Products</NavLink>
        <NavLink to={"/Users"}>Users</NavLink>
        <NavLink to={"/Users2"}>Users2</NavLink>
        <NavLink to={"/Todos"}>Todos</NavLink>
      </nav>
    </div>
  );
};

export default Header;
