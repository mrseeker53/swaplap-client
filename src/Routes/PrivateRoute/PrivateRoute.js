import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Loader from '../../Pages/Shared/Loader/Loader';

const PrivateRoute = ({ children }) => {
    // Declare context using the useContext hook to use context info
    const { user, loading } = useContext(AuthContext);
    // Declare location using useLocation
    const location = useLocation();

    // Set loading state
    if (loading) {
        return <Loader></Loader>
    }

    // If the user is login, return children (private route)
    if (user) {
        return children;
    }
    // If the user is not logged in, return to login page using Navigate
    // After login go back to the previous page using location as object
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;