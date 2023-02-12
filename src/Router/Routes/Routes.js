import Main from "../../layout/Main";
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
            }
        ]
    }
]);



export default router;