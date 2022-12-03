import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider';
import useTitle from '../../../../hooks/useTitle';
import Loader from '../../../Shared/Loader/Loader';
import Booking from '../Booking/Booking';
import ProductItem from './ProductItem';

const Product = () => {
    // Dynamic title using hooks
    useTitle('Category');

    // Call useLoaderData to load /category/:id data as products
    const products = useLoaderData();

    // Call the context to use loader
    const { loading } = useContext(AuthContext);

    // Display Loader
    if (loading) {
        return <Loader></Loader>
    }


    return (
        <div className='my-24'>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    // If data found, then loop through by map ( && conditional rendering and ? optional chaining)
                    products &&
                    products?.map(product => <ProductItem
                        key={product._id}
                        product={product}
                    ></ProductItem>)
                }
                {
                    // If data found, then loop through by map ( && conditional rendering and ? optional chaining)
                    products &&
                    products?.map(product => <Booking
                        key={product._id}
                        product={product}
                    ></Booking>)
                }
            </div>
        </div>
    );
};

export default Product;