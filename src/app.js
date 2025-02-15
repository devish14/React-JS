import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header.js";
import { BodyComponent } from "./components/Body.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/Restaurant-Menu.js";

//  making about as a lazy loaded module , we are using suspense to wrap the Lazy loaded component

// -  bg-yellow-200 sm:bg-pink-400 md:bg-amber-600  lg:bg-green-500 xl:bg-blue-400 (media queries)
const About = lazy(() => import("./components/About.js"));

// Top level component
const AppLayout = () => {
  return (
    <div className="">
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
        //using suspense to wrap the lazy loaded element .
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <About />
          </Suspense>
        ),
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
