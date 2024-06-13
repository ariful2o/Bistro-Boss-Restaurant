import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Order from "../pages/order/Order";
import Shop from "../pages/shop/Shop";
import Root from "../root/Root";
import Login from "../pages/authentication/login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:"/orders",
                element:<Order></Order>
            },
            {
                path:"/shop",
                element:<Shop></Shop>
            },
            {
                path: "/shop/:category",
                element: <Shop></Shop>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    },
])

export default router;