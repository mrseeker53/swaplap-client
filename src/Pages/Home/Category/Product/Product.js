import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../../hooks/useTitle';
import Booking from '../Booking/Booking';
import ProductItem from './ProductItem';

const Product = () => {
    // Dynamic title using hooks
    useTitle('Category');

    // Call useLoaderData to load /category/:id data as products
    const products = useLoaderData();

    return (
        <div className='my-24'>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <ProductItem
                        key={product._id}
                        product={product}
                    ></ProductItem>)
                }
                {
                    products.map(product => <Booking
                        key={product._id}
                        product={product}
                    ></Booking>)
                }
            </div>
        </div>
    );
};

export default Product;