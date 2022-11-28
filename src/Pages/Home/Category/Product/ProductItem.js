import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ProductItem = ({ product }) => {
    const { _id, img, title, location, originalPrice, price, useYear, seller, post, status, description } = product;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            {/* Photo viewer */}
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure><img src={img} alt="" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-md font-semibold'>Original Price: {originalPrice} Tk</p>
                <p className='text-md font-semibold'>Price: {price} Tk</p>
                <p className='text-md'>Location: {location}</p>
                <p className='text-md'>Use of year: {useYear}</p>
                <p className='text-md'>Seller Name: {seller}</p>
                <p className='text-md'>Posted: {post}</p>
                <p className='text-md'>Availability: {status}</p>
                <p className='text-md'>{description}</p>
                <div className="card-actions justify-end mt-8">
                    <Link to={`/menu/${_id}`}>
                        <button className="btn btn-outline btn-primary">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;