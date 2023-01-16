import { createBrowserRouter } from "react-router-dom";
import Form from "../Layout/Form";
import Main from "../Layout/Main";
import CheckOut from "../Pages/CheckOut/CheckOut";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Orders from "../Pages/Orders/Orders";
import Login from "../Pages/Shared/Login";
import SignUp from "../Pages/Shared/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage />,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/checkout/:id',
            element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
            loader: ({ params }) => fetch(`http://localhost:5001/services/${params.id}`)
         },
         {
            path: '/orders',
            element: <PrivateRoute><Orders></Orders></PrivateRoute>
         }
      ]
   },
   {
      path: '/login',
      element: <Form />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: '/login',
            element: <Login />
         },
         {
            path: '/login/signUp',
            element: <SignUp />
         }
      ]
   }
])

export default router;