import React from 'react';
import useTitle from '../../../hooks/useTitle';

const MyOrders = () => {
    // Dynamic title using hook
    useTitle('My Orders');

    return (
        <div>
            <h2>My Orders</h2>
        </div>
    );
};

export default MyOrders;