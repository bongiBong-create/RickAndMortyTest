import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { Character } from "../pages/character";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <Character />,
  },
]);
