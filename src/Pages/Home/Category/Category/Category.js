import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../../Shared/Loader/Loader';
import CategoryItem from './CategoryItem';

const Category = () => {
    // Declare useQuery to fetch /category to get data
    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('https://swaplap-server.vercel.app/category');
            const data = await res.json();
            return data;
        }
    });

    // Display Loader
    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='my-24'>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    // If data found, then loop through by map ( && conditional rendering and ? optional chaining)
                    categories &&
                    categories?.map(category => <CategoryItem
                        key={category._id}
                        category={category}
                    ></CategoryItem>)
                }
            </div>
        </div>
    );
};

export default Category;