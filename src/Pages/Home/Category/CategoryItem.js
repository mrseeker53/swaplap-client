import React from 'react';
import { Link } from 'react-router-dom';

// Destructure category as object
const CategoryItem = ({ category }) => {
    // Destructuring category
    const { _id, image } = category;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <Link to={`/category/${_id}`}>
                <figure><img className='w-2/3' src={image} alt="Laptop" /></figure>
            </Link>
        </div>
    );
};

export default CategoryItem;