import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useSeller from '../../hooks/useSeller';
import Loader from '../../Pages/Shared/Loader/Loader';

const SellerRoute = ({ children }) => {
    // Declare context using the useContext hook to use context info
    const { user, loading } = useContext(AuthContext);
    // Declare the useSeller to get seller
    const [isSeller, isSellerLoading] = useSeller(user?.email);

    // Declare location using useLocation
    const location = useLocation();

    // Set loading state
    if (loading || isSellerLoading) {
        return <Loader></Loader>
    }

    // If the user is login & seller, return children (seller route)
    if (user && isSeller) {
        return children;
    }
    // If the user is not logged in, return to login page using Navigate
    // After login go back to the previous page using location as object
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;