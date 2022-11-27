import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Support from '../../Pages/Home/Support/Support';
import NotFound from '../../Pages/NotFound/NotFound';
import Blog from '../../Pages/Blog/Blog';

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