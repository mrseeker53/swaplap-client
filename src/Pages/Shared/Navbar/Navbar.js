import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';

const Navbar = () => {
    // Create a variable & set menu items for duplicate uses
    // Empty tag: <></> or <React.Fragment> </React.Fragment>
    const menuItems = <React.Fragment>
        <li><Link to="/" className=' hover:text-primary-focus'>Home</Link></li>
        <li><Link to="/support" className=' hover:text-primary-focus'>Support</Link></li>
    </React.Fragment>

    return (
            <div className="navbar bg-base-100 flex justify-between py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        {/* For Mobile & Tablet */}
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 font-semibold w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/" className="flex justify-center">
                        <img className='w-12 md:w-10 rounded-full mr-2 mt-1' src={logo} alt='' />
                        <p className='text-xl md:text-4xl font-bold text-primary-focus hover:text-primary'>Swaplap</p>
                    </Link>
                </div>
                {/* For Desktop */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 font-semibold">
                        {menuItems}
                    </ul>
                </div>
            </div>
    );
};

export default Navbar;