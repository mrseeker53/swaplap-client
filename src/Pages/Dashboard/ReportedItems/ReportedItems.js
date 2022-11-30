import React from 'react';
import useTitle from '../../../hooks/useTitle';

const ReportedItems = () => {
    // Dynamic title using hook
    useTitle('Reported Items');

    return (
        <div>
            <h2>Reported Items</h2>
        </div>
    );
};

export default ReportedItems;