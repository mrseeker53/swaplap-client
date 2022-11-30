import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    // Declare context & hook
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.role);

    return (
        <div>
            <Navbar></Navbar>
            {/* Use drawer */}
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to="/dashboard">My Orders</Link></li>
                        <li><Link to="/dashboard/addaproduct">Add A Product</Link></li>
                        <li><Link to="/dashboard/myproducts">My Products</Link></li>
                        <li><Link to="/dashboard/mybuyers">My Buyers</Link></li>
                        <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                        <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                        <li><Link to="/dashboard/reporteditems">Reported Items</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;