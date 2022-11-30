import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Loader from '../../Pages/Shared/Loader/Loader';

const AdminRoute = ({ children }) => {
    // Declare context using the useContext hook to use context info
    const { user, loading } = useContext(AuthContext);
    // Declare the useAdmin to get admin
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);

    // Declare location using useLocation
    const location = useLocation();

    // Set loading state
    if (loading || isAdminLoading) {
        return <Loader></Loader>
    }

    // If the user is login & admin, return children (private route)
    if (user && isAdmin) {
        return children;
    }
    // If the user is not logged in, return to login page using Navigate
    // After login go back to the previous page using location as object
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;