import { createBrowserRouter } from "react-router-dom";
import Home from "../Layouts/Home";
import Main from "../Layouts/Main";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Recipes from "../Layouts/Recipes";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Pages/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:"/recipes/:id",
          element:<PrivateRoute><Recipes></Recipes></PrivateRoute>,
          loader: ({params}) => fetch(`https://sapore-server-snigbar.vercel.app/${params.id}`)
      }
      ]
     
    },
  ]);

export default router