import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    // Dynamic title using hook
    useTitle('Home');

    return (
        <div className='mx-5'>
            <h2>Home</h2>
        </div>
    );
};

export default Home;