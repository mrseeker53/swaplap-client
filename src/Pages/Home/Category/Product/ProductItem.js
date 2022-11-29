import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ProductItem = ({ product }) => {
    const { img, title, location, originalPrice, price, useYear, seller, post, status, description } = product;

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
                <p className='text-md font-semibold'>Price: {price} Tk</p>
                <p className='text-md'>Original Price: {originalPrice} Tk</p>
                <p className='text-md'>Location: {location}</p>
                <p className='text-md'>Use of year: {useYear}</p>
                <p className='text-md'>Seller Name: {seller}</p>
                <p className='text-md'>Posted: {post}</p>
                <p className='text-md'>{description}</p>
                <div className="card-actions justify-end mt-8">
                    <label
                        disabled={status !== 'available'}
                        htmlFor="booking-modal"
                        className="btn btn-primary text-base-100"
                    >Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;