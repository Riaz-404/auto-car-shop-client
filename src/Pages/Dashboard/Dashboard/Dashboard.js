import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from '../../Home/NavigationBar/NavigationBar';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageProduct from '../ManageProduct/ManageProduct';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Profile from '../Profile/Profile';
import Review from '../Review/Review';
import Sidebar from '../SideBar/Sidebar';

const Dashboard = () => {
    return (
        <div>
            <NavigationBar />
            <div className='flex'>
                <Sidebar />
                <div className='w-screen m-10'>
                    <Routes>
                        <Route path="/" element={<Profile />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/myorders" element={<MyOrders />} />
                        <Route path="/payment" element={<Payment />} />
                        <Route path="/review" element={<Review />} />
                        <Route path="/manageorders" element={<ManageOrders />} />
                        <Route path="/addproduct" element={<AddProduct />} />
                        <Route path="/makeadmin" element={<MakeAdmin />} />
                        <Route path="/manageproduct" element={<ManageProduct />} />
                    </Routes>
                </div>
            </div>
        </div>


    );
};

export default Dashboard;