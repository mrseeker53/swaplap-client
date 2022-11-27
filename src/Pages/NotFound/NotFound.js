import React from 'react';
import useTitle from '../../hooks/useTitle';
import error from '../../assets/images/error.gif';
import Navbar from '../Shared/Navbar/Navbar';

const NotFound = () => {
    // Declare title using hook
    useTitle('Not Found');

    return (
        <div>
            <Navbar></Navbar>
            {/* Image is center: grid place-content-center(horizontally) place-items-center(vertically) */}
        <div className='grid place-content-center place-items-center text-center mb-40'>
            {/* Add an gif file */}
            <img className='w-1/2' src={error} alt="" />
            <h1 className='text-error text-5xl'>404... Not Found!</h1>
            <p className='text-error text-xl'>: : The server can not find the requested resource</p>
        </div>
        </div>
    );

};

export default NotFound;