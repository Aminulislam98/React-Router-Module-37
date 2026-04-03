import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Component/Root/Root.jsx";
import Home from "./Component/Home/Home.jsx";
import Mobile from "./Component/Mobiles/Mobile.jsx";
import Laptops from "./Component/Laptops/Laptops.jsx";
import Products from "./Component/Products/Products.jsx";
import Users from "./Component/Users/Users.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "Mobiles", Component: Mobile },
      { path: "Laptops", Component: Laptops },
      { path: "Products", Component: Products },
      {
        path: "Users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
