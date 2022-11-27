import React from 'react';
import { Link } from 'react-router-dom';
import './BannerItem.css';

// Destructure item as object
const BannerItem = ({ item }) => {
    // Destructure from item
    const { id, title, image, prev, next } = item;

    return (
        // set dynamic id
        <div id={`item${id}`} className="carousel-item relative w-full ">
            <div className='carousel-img'>
                <img src={image} alt="" className="item-img w-full rounded-xl" />
            </div>
            <div className="absolute transform -translate-y-1/2 w-3/5 left-20 lg:left-32 top-1/2">
                <p className='text-primary text-xl md:text-4xl font-semibold md:pb-12'>Explore With Us<br />To Your Next<br />Journey</p>
                <p className='text-lg md:text-3xl text-primary py-8'>{title}</p>
                <button className="btn btn-outline btn-primary text-base-100"><Link to="/category">See More</Link></button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#item${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#item${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;