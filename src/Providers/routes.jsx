import { createBrowserRouter } from "react-router-dom";
import Home from "../Layouts/Home";
import Main from "../Layouts/Main";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Recipes from "../Layouts/Recipes";

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
          path:"/recipes/:id",
          element:<Recipes></Recipes>,
          loader: ({params}) => fetch(`http://localhost:5000/recipes/${params.id}`)
      }
      ]
     
    },
  ]);

export default router