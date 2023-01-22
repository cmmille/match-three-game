import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import Error404 from "./Error404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error404 />,
    children: [
      // other routes here
      {path: "/", element: <Home />}
    ],
  },
]);

export default router;
