import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";


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
            }
        ]
    }
])

export default router;