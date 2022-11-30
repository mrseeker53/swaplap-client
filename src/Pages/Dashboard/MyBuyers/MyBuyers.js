import React from 'react';
import useTitle from '../../../hooks/useTitle';

const MyBuyers = () => {
    // Dynamic title using hook
    useTitle('My Buyers');

    return (
        <div>
            <h2>My Buyers</h2>
        </div>
    );
};

export default MyBuyers;