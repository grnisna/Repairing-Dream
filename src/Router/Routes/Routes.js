import Main from "../../layout/Main";
import About from "../../pages/Components/About/About";
import Checkout from "../../pages/Components/Checkout/Checkout";
import Contact from "../../pages/Components/Contact/Contact";
import Home from "../../pages/Components/Home/Home/Home";
import Login from "../../pages/Components/Login/Login/Login";
import Registration from "../../pages/Components/Login/Registration/Registration";
import Orders from "../../pages/Components/Orders/Orders";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/registration',
                element:<Registration/>
            },
            {
                path:'/checkout/:id',
                element:<PrivateRoute><Checkout/></PrivateRoute>,
                loader : ({params}) => fetch(`https://repairing-dream-server.vercel.app/services/${params.id}`)
            },
            {
                path:'/orders',
                element:<PrivateRoute><Orders/></PrivateRoute>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            }
        ]
    }
]);



export default router;