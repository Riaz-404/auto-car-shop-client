import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from '../../Home/NavigationBar/NavigationBar';
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
                    </Routes>
                </div>
            </div>
        </div>


    );
};

export default Dashboard;