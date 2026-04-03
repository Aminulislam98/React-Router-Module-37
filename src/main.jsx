import { StrictMode, Suspense } from "react";
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
import Users2 from "./Component/Users2/Users2.jsx";
import UserDetails from "./Component/UserDetails/UserDetails.jsx";
import Todos from "./Component/Todos/Todos.jsx";
import TodoDetails from "./Component/TodoDetails/TodoDetails.jsx";
const response = async () => {
  const userResponse = await fetch(
    "https://jsonplaceholder.typicode.com/users",
  );
  return userResponse.json();
};

const userRes = response();

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
      {
        path: "Users2",
        element: (
          <Suspense callback={<small>Loading...</small>}>
            <Users2 userRes={userRes}></Users2>
          </Suspense>
        ),
      },
      {
        path: "Users/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails,
      },
      {
        path: "Todos",
        loader: () => fetch("https://jsonplaceholder.typicode.com/todos"),
        Component: Todos,
      },
      {
        path: "Todos/:todoId",

        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`),
        Component: TodoDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
