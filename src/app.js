import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import HeaderComponent from "./components/Header.js";
import { BodyComponent } from "./components/Body.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/Restaurant-Menu.js";
import { Provider } from "react-redux";
import AppStore from "./utils/appStore"
import UserContext from "./utils/UserContext";
//  making about as a lazy loaded module , we are using suspense to wrap the Lazy loaded component

// -  bg-yellow-200 sm:bg-pink-400 md:bg-amber-600  lg:bg-green-500 xl:bg-blue-400 (media queries)
const About = lazy(() => import("./components/About.js"));

// Top level component
const AppLayout = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    return fetchData();
  }, []);

  const fetchData = () => {
    // api calls and authentication
    const data = {
      name: "Devi Shree",
    };
    setUserInfo(data.name);
  };

  // Using React Provider as a nested so we get two different values as we are wrapping the component header will get diff value and the remaining will different

  // Passing setUserInfo to access the live data in the input box adding this here i can access it from anywhere

  return (
    <Provider store={AppStore}>
      <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
      <div className="">
        <UserContext.Provider value={{ loggedInUser: "Krishiv" }}>
          <HeaderComponent />
        </UserContext.Provider>
        {/* We are keeping the header component intact so using a child route and using OUTLET  */}
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
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
