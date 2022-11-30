import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useTitle from '../../../hooks/useTitle';

const MyProducts = () => {
    // Dynamic title using hook
    useTitle('My Products');

    const { data: products = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/dashboard/myproducts');
            const data = await res.json();
            return data;
        }
    });

    return (
        <div>
            <h2 className='text-2xl mb-5'>My Products</h2>
            <div className='overflow-x-auto'>
                <table className='table w-full'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th>Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) =>
                                <tr key={product._id}>
                                    <th>{i + 1}</th>
                                    <td>{product.title}</td>
                                    <td>{product.condition}</td>
                                    <td>{product.status}</td>
                                    <td>{product.price}</td>
                                    <td><button className='btn btn-error'>Delete</button></td>
                                    <td><button className='btn btn-primary'>Advertise</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;