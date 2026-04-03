import React from "react";
import { Link, NavLink } from "react-router";
import "../../../src/App.css";

const Header = () => {
  return (
    <div>
      <div>
        <button className="btn text-black">Logo</button>
      </div>
      <nav className="flex flex-row justify-between p-10 items-center gap-3">
        <NavLink to={"/Laptops"}>Laptop</NavLink>
        <NavLink to={"/Mobiles"}>Mobiles</NavLink>
        <NavLink to={"/Products"}>Products</NavLink>
        <NavLink to={"/Users"}>Users</NavLink>
      </nav>
    </div>
  );
};

export default Header;
