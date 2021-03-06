import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import NavigationBar from '../NavigationBar/NavigationBar';
import Products from '../Products/Products/Products';
import ReviewHome from '../ReviewHome/ReviewHome';

const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <Products></Products>
            <ReviewHome/>
            <Contact/>
            <Footer></Footer>
        </div>
    );
};

export default Home;