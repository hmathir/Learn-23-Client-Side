import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blogs from "../pages/Blogs/Blogs";
import CheckOut from "../pages/CheckOut/CheckOut";
import CourseDetails from "../pages/Courses/CourseDetails";
import Courses from "../pages/Courses/Courses";
import FAQ from "../pages/FAQ/FAQ";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Error from "../shared/Error";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
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
                path: '/forget_password',
                element: <ForgotPassword></ForgotPassword>
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
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/faqs',
                element: <FAQ></FAQ>
            }
        ]
    }
])

export default router;