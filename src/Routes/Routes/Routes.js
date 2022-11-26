import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";

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
            }
        ]
    }
])

// Export router
export default router;