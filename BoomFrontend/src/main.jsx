import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import ScheduleMeet from './pages/ScheduleMeet';


const router = createBrowserRouter([{path:"/",element:<App/>},{path:"schedulemeet",element:<ScheduleMeet/>}])

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
);
