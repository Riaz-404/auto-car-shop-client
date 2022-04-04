import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Sidebar = () => {
    const { user } = useAuth();
    console.log(user);
    return (
        <div className='w-64 h-screen border-r-2'>
            <li className='py-2 list-none'>
                <Link to="profile">
                    <ol className='p-3 text-center cursor-pointer hover:bg-gray-700 hover:text-white'>Profile</ol>
                </Link>
                <Link to="myorders">
                    <ol className='p-3 text-center cursor-pointer hover:bg-gray-700 hover:text-white'>My Orders</ol>
                </Link>
                <Link to="payment">
                    <ol className='p-3 text-center cursor-pointer hover:bg-gray-700 hover:text-white '>Payment</ol>
                </Link>
                <Link to="review">
                    <ol className='p-3 text-center cursor-pointer hover:bg-gray-700 hover:text-white '>Review</ol>
                </Link>
            </li>
            {
                user?.email ?
                    <>
                        <hr />
                        <li className='py-2 list-none'>
                            <ol className='p-3 text-center cursor-pointer hover:bg-gray-700 hover:text-white'>Manage All Orders</ol>
                            <ol className='p-3 text-center cursor-pointer hover:bg-gray-700 hover:text-white'>Add A Product</ol>
                            <ol className='p-3 text-center cursor-pointer hover:bg-gray-700 hover:text-white '>Make Admin</ol>
                            <ol className='p-3 text-center cursor-pointer hover:bg-gray-700 hover:text-white '>Manage Products</ol>
                        </li>
                    </>
                    :
                    ""
            }
        </div>
    );
};

export default Sidebar;