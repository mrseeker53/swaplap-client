import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryItem from './CategoryItem';

const Category = () => {
    // Declare useQuery to fetch /category
    const { data: categories = [] } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('https://swaplap-server.vercel.app/category');
            const data = await res.json();
            return data;
        }
    });

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