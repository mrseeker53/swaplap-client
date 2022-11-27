import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Support from '../Support/Support';

const Home = () => {
    // Dynamic title using hook
    useTitle('Home');

    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Advertise></Advertise>
            <Category></Category>
            <Support></Support>
        </div>
    );
};

export default Home;