import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header.js";
import { BodyComponent } from "./components/Body.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/Restaurant-Menu.js";

// Top level component
const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      {/* We are keeping the header component intact so using a child route and using OUTLET  */}
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
