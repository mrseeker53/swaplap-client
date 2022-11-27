import React, { useEffect, useState } from 'react';
import CategoryItem from './CategoryItem';

const Category = () => {
    // Declare state to set categories
    const [categories, setCategories] = useState([]);

    // Declare useEffect to get data from server & set data
    useEffect(() => {
        fetch('https://swaplap-server.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <div className='my-24'>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories.map(category => <CategoryItem
                        key={category._id}
                        category={category}
                    ></CategoryItem>)
                }
            </div>
        </div>
    );
};

export default Category;