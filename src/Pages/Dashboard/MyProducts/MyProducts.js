import React from 'react';
import useTitle from '../../../hooks/useTitle';

const MyProducts = () => {
    // Dynamic title using hook
    useTitle('My Products');

    return (
        <div>
            <h2>My Products</h2>
        </div>
    );
};

export default MyProducts;