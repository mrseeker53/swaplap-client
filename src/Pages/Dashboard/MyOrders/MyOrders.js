import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import Loader from '../../Shared/Loader/Loader';

const MyOrders = () => {
    // Dynamic title using hook
    useTitle('My Orders');

    // Call the context to use user data
    const { user, loading } = useContext(AuthContext);

    const { data: orders = [] } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://swaplap-server-mrseeker53.vercel.app/dashboard/myorders/${user?.email}`);
            const data = await res.json();
            return data;
        }
    });
    console.log(orders);

    // Display Loader
    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <h2 className='text-2xl mb-5'>My Orders</h2>
            <div className='overflow-x-auto'>
                <table className='table w-full'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // If data found, then loop through by map ( && conditional rendering and ? optional chaining)
                            orders &&
                            orders?.map((order, i) =>
                                <tr key={order._id}>
                                    <th>{i + 1}</th>
                                    <td>{order.img}</td>
                                    <td>{order.title}</td>
                                    <td>{order.price}</td>
                                    <td><button className='btn btn-primary'>Pay</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;