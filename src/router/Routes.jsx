import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Menu from "../pages/menu/menu/Menu";
import Order from "../pages/order/Order";
import Login from "../pages/login/Login";
import Singup from "../pages/Register/Singup";
import Dashbord from "../layout/Dashbord";
import Mycart from "../pages/dashboard/Mycart";
import AllUsers from "../pages/dashboard/allusers/AllUsers";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'order/:category',
                element: <Order></Order>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <Singup></Singup>

            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashbord></Dashbord>,
        children: [
            {
                path: 'mycart',
                element: <Mycart />
            },
            {
                path: 'allusers',
                element: <AllUsers></AllUsers>
            }
        ]
    }
]);