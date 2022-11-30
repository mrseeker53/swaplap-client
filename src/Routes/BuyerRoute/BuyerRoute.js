import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useBuyer from '../../hooks/useBuyer';
import Loader from '../../Pages/Shared/Loader/Loader';

const BuyerRoute = ({ children }) => {
    // Declare context using the useContext hook to use context info
    const { user, loading } = useContext(AuthContext);
    // Declare the useBuyer to get buyer
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email);

    // Declare location using useLocation
    const location = useLocation();

    // Set loading state
    if (loading || isBuyerLoading) {
        return <Loader></Loader>
    }

    // If the user is login & buyer, return children (buyer route)
    if (user && isBuyer) {
        return children;
    }
    // If the user is not logged in, return to login page using Navigate
    // After login go back to the previous page using location as object
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;