import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Support from '../../Pages/Home/Support/Support';
import NotFound from '../../Pages/NotFound/NotFound';
import Blog from '../../Pages/Blog/Blog';
import Product from "../../Pages/Home/Category/Product/Product";
import Category from "../../Pages/Home/Category/Category/Category";

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
                element: <Product></Product>,
                loader: ({ params }) => fetch(`https://swaplap-server.vercel.app/category/${params.id}`)
            }
        ]
    },
    // Route for 404 page
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])

// Export router
export default router;