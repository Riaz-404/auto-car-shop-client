import { Loader } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import NavigationBar from '../../Home/NavigationBar/NavigationBar';
import CarsList from '../Cars List/CarsList';


const Cars = () => {
    const [cars, setCars] = useState([]);
    const [loadingData, setLoadingData] = useState(false);

    useEffect(() => {
        setLoadingData(true);
        fetch('https://auto-car-shop.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => {
                setCars(data);
                setLoadingData(false);
            })
    }, [])
    return (
        <div>
            <NavigationBar />


            {
                loadingData ?
                    <div className='m-10 flex items-center justify-center'>
                        <Loader variant="bars" color="#1f2937" size="lg" />
                    </div>
                    :
                    <div className='m-10'>
                        {cars.map(car => <CarsList key={car._id} car={car} />)}
                    </div>
            }

        </div>
    );
};

export default Cars;