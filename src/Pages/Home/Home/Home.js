import React from 'react';
import Banner from '../Banner/Banner';
import NavigationBar from '../NavigationBar/NavigationBar';
import Products from '../Products/Products/Products';
import Footer from '../Shared/Footer/Footer/Footer';

const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;