import { createHashRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { Character } from "../pages/character";

export const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <Character />,
  },
]);
