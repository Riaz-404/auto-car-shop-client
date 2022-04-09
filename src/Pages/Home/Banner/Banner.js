import React from 'react';
import banner from "../../../Images/banner3.jpg"

const styles = {
    backgroundImage: `url(${banner})`,
}

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${banner})` }} className="bg-cover bg-center bg-no-repeat h-screen grid grid-cols-2 gap-4">

            <p className="text-white text-6xl font-sans align-middle flex items-center ml-9 ">FIND YOUR <br /> DREAM CAR HERE</p>
        </div>
    );
};

export default Banner;