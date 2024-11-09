import "./App.css";
import User from "./getuser/User";
import AddUser from "./adduser/AddUser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UpdateUser from "./updateOp/UpdateUser";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <AddUser></AddUser>,
    },
    {
      path: "/update/:id",
      element: <UpdateUser />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
