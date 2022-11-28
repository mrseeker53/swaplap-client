import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
    const { _id, img, title, location, price, description } = product;

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
                <p className='text-xl font-semibold'>Price: ${price}</p>
                <p className='text-lg'>{description.slice(0, 100)}</p>
                <div className="card-actions justify-end mt-8">
                    <Link to={`/menu/${_id}`}>
                        <button className="btn btn-outline btn-primary text-white">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;