import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import UpdateProfile from "../Pages/Authentication/Register/UpdateProfile";
import Home from "../Pages/Home/Home";
import Orders from "../Pages/Orders/Orders";
import Success from "../Pages/Orders/Success/Success";
import NotFound from "../Pages/Shared/NotFound";
import Profile from "../Pages/Shared/Profile";
import PrivateRoutes from "./PrivateRoutes";

const routes = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path : '/',
                element:<Home></Home>
            },
            {
                path:'/order',
                element:<PrivateRoutes><Orders></Orders></PrivateRoutes>,
                loader : () => fetch('http://localhost:5000/orders')
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
                path:'/notfound',
                element:<PrivateRoutes><NotFound></NotFound></PrivateRoutes>
            },
            {
                path : '/success',
                element : <Success></Success>
            },
            {
                path:'/update',
                element : <UpdateProfile></UpdateProfile>
            },
            {
                path:'/profile',
                element:<Profile></Profile>
            }
        ]
    }
])

export default routes;