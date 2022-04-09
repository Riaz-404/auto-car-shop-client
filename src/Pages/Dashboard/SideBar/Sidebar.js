import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaymentIcon from '@mui/icons-material/Payment';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ListAltIcon from '@mui/icons-material/ListAlt';
import FactCheckIcon from '@mui/icons-material/FactCheck';


const Sidebar = () => {
    const { admin } = useAuth();

    return (
        <div className='w-64 h-screen border-r-2'>
            <li className='py-2 list-none'>
                <Link to="profile">
                    <ol className='p-3 text-left cursor-pointer hover:bg-gray-700 hover:text-white'>
                        <AccountCircleIcon className='mx-2'/>Profile
                    </ol>
                </Link>
                <Link to="myorders">
                    <ol className='p-3 text-left cursor-pointer hover:bg-gray-700 hover:text-white'>
                        <ShoppingCartIcon className='mx-2'/>My Orders
                    </ol>
                </Link>
                <Link to="payment">
                    <ol className='p-3 text-left cursor-pointer hover:bg-gray-700 hover:text-white '>
                        <PaymentIcon className='mx-2' />Payment
                    </ol>
                </Link>
                <Link to="review">
                    <ol className='p-3 text-left cursor-pointer hover:bg-gray-700 hover:text-white '>
                        <ReviewsIcon className='mx-2' />Review
                    </ol>
                </Link>
            </li>
            {
                admin.Admin ?
                    <>
                        <hr />
                        <li className='py-2 list-none'>
                            <Link to="manageorders">
                                <ol className='p-3 text-left cursor-pointer hover:bg-gray-700 hover:text-white'>
                                    <ListAltIcon className='mx-2' />Manage All Orders
                                </ol>
                            </Link>
                            <Link to="addproduct">
                                <ol className='p-3 text-left cursor-pointer hover:bg-gray-700 hover:text-white'>
                                    <AddShoppingCartIcon className='mx-2' />Add A Product
                                </ol>
                            </Link>
                            <Link to="makeadmin">
                                <ol className='p-3 text-left cursor-pointer hover:bg-gray-700 hover:text-white '>
                                    <ManageAccountsIcon className='mx-2'/>Make Admin
                                </ol>
                            </Link>
                            <Link to="manageproduct">
                                <ol className='p-3 text-left cursor-pointer hover:bg-gray-700 hover:text-white '>
                                    <FactCheckIcon className='mx-2'/>Manage Products
                                </ol>
                            </Link>
                        </li>
                    </>
                    :
                    ""
            }
        </div>
    );
};

export default Sidebar;