import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import UserDetail from "./pages/UserDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/user/:id",
    element: <UserDetail />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
