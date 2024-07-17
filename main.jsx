import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home.jsx";
import Error from "./components/Error.jsx";
import Country from "./components/Country.jsx";
import Contact from "./components/Contact.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <Error/>,
      children:[
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/:country",
            element: <Country/>,
    
        },
        {
           path: '/contact',
           element: <Contact/>
        }
      ]
    },
    
  ]);


root.render(<RouterProvider router={router} />);
