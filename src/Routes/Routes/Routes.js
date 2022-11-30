import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Support from '../../Pages/Home/Support/Support';
import NotFound from '../../Pages/NotFound/NotFound';
import Blog from '../../Pages/Blog/Blog';
import Product from "../../Pages/Home/Category/Product/Product";
import Category from "../../Pages/Home/Category/Category/Category";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout";

// Create router
const router = createBrowserRouter([
    // Create main route
    {
        path: '/',
        element: <Main></Main>,
        // Create others route
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/support',
                element: <Support></Support>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/category',
                element: <Category></Category>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><Product></Product></PrivateRoute>,
                loader: ({ params }) => fetch(`https://swaplap-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    // Create Private route
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,

    },
    // Route for 404 page
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])

// Export router
export default router;