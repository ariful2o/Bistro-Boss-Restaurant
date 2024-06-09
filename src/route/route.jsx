import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home/Home/Home";
import Order from "../pages/order/Order";
import Shop from "../pages/shop/Shop";

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
                path:'/shop',
                element:<Shop></Shop>
            }
        ]
    },
])

export default router;