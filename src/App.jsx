import React from "react";
import Navbar from "./Components/Navbar";
import {
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Body from "./Components/Body";
const App = () => {
  function AppLayout() {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    );
  }
  let a = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/Contact",
          element: <Contact />,
        },
        {
          path: "/About",
          element: <About />,
        },
        {
          path: "/Login",
          element: <Login />,
        },
      ],
    },

    {
      path: "/Body",
      element: <Body />,
    },
    {
      path: "/Contact",
      element: <Contact />,
    },
    {
      path: "/About",
      element: <About />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
  ]);

  return (
    <>
      <RouterProvider router={a}></RouterProvider>
    </>
  );
};

export default App;