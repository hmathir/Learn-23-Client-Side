import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import CheckOut from "../pages/CheckOut/CheckOut";
import CourseDetails from "../pages/Courses/CourseDetails";
import Courses from "../pages/Courses/Courses";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";



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
                element: <Home></Home>,
                loader: ()=>{
                    return fetch('https://learn23-server.vercel.app/courses/')
                }
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: ()=>{
                    return fetch('https://learn23-server.vercel.app/courses/')
                }
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params})=>{
                    return fetch(`https://learn23-server.vercel.app/courses/${params.id}`)
                }
            },
            {
                path: '/checkout/:id',
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute> ,
                loader: ({params})=>{
                    return fetch(`https://learn23-server.vercel.app/courses/${params.id}`)
                }
            }
        ]
    }
])

export default router;