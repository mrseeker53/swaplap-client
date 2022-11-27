import React from 'react';
import useTitle from '../../hooks/useTitle';
import error from '../../assets/images/error.gif';

const NotFound = () => {
    // Declare title using hook
    useTitle('Not Found');

    return (
        // Image is center: grid place-content-center(horizontally) place-items-center(vertically)
        <div className='grid place-content-center place-items-center text-center my-20'>
            {/* Add an gif file */}
            <img className='w-1/2' src={error} alt="" />
            <h1 className='text-error text-5xl'>404... Not Found!</h1>
            <p className='text-error text-xl'>: : The server can not find the requested resource</p>
        </div>

    );

};

export default NotFound;