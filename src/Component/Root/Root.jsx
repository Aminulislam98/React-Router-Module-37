import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

const Root = () => {
  const navigate = useNavigation();
  const isNavigating = Boolean(navigate.location);
  return (
    <div>
      <Header></Header>
      <div>
        <aside>
          <Sidebar></Sidebar>
        </aside>
        <div className="flex justify-center items-center py-4 text-2xl text-green-700 font-semibold mb-4">
          {isNavigating && <p>Loading...</p>}
        </div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
