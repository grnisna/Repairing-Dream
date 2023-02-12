import Main from "../../layout/Main";
import Checkout from "../../pages/Components/Checkout/Checkout";
import Home from "../../pages/Components/Home/Home/Home";
import Login from "../../pages/Components/Login/Login/Login";
import Registration from "../../pages/Components/Login/Registration/Registration";

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
                element:<Checkout/>,
                loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
]);



export default router;