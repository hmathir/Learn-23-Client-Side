import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <></>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>{
                    return fetch('https://learn23-server.vercel.app/courses/')
                }
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;