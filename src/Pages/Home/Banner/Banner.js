import React, { useEffect, useState } from 'react';
import BannerItem from './BannerItem';

const Banner = () => {
    // Declare state to set banner data
    const [banner, setBanner] = useState([]);

    // Load data from server
    useEffect(() => {
        fetch('https://swaplap-server.vercel.app/banner')
            .then(res => res.json())
            .then(data => setBanner(data));
    }, []);

    return (
        <div className="carousel w-full py-10">
            {
                // Loop through on banner & send data as item to the BannerItem
                banner.map(item => <BannerItem
                    key={item._id}
                    item={item}
                ></BannerItem>)
            }
        </div>
    );
};

export default Banner;