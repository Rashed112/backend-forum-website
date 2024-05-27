import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HomeLayout } from "./pages";

import { loader } from "./pages/HomeLayout";

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout/>,
    loader: loader,
  }
])

const App = () => {
  return <RouterProvider router={router} />;
}
export default App