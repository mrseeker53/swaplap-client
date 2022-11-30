import React from 'react';
import useTitle from '../../../hooks/useTitle';

const AddAProduct = () => {
    // Dynamic title using hook
    useTitle('Add A Product');

    return (
        <div>
            <h2>Add A Product</h2>
        </div>
    );
};

export default AddAProduct;