import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../Error/Error";
import Add from "../pages/Add";
import PrivateRoute from "./PrivateRoute";
import All from "../pages/All";
import Single from "../pages/Single";
import Purchase from "../pages/Purchase";
import Gallery from "../pages/Gallery";
import My from "../pages/My";
import Update from "../pages/Update";
import Orders from "../pages/Orders";




const Routes = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: () => fetch('https://assignment-11-server-six-cyan.vercel.app/foods')
            },
            {
                path:"/all",
                element:<All></All>,
                loader: () => fetch('https://assignment-11-server-six-cyan.vercel.app/foods')
            },
            {
                path:"/gallery",
                element:<Gallery></Gallery>,
                loader: () => fetch('https://assignment-11-server-six-cyan.vercel.app/foods')
            },
            {
                path:"/single/:id",
                element:<Single></Single>,
                loader: ({params}) => fetch(`https://assignment-11-server-six-cyan.vercel.app/foodss/${params.id}`)
            },
            {
                path:"/purchase/:id",
                element:<PrivateRoute><Purchase></Purchase></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignment-11-server-six-cyan.vercel.app/foodss/${params.id}`)
            },
            {
                path:"/add",
                element:<PrivateRoute><Add></Add></PrivateRoute>
            },
            {
                path:"/my",
                element:<PrivateRoute><My></My></PrivateRoute>
            },
            {
                path:"/orders",
                element:<PrivateRoute><Orders></Orders></PrivateRoute>
            },
            {
                path:"/update/:id",
                element:<PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignment-11-server-six-cyan.vercel.app/foodss/${params.id}`)
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    },
    {
        path: "*",
        element: <Error></Error>,
    },
])

export default Routes;