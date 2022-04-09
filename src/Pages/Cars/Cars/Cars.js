import React, { useEffect, useState } from 'react';
import NavigationBar from '../../Home/NavigationBar/NavigationBar';
import CarsList from '../Cars List/CarsList';


const Cars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('https://auto-car-shop.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => {
                setCars(data);
            })
    }, [])
    return (
        <div>
            <NavigationBar/>

            <div className='m-10'>
                {
                    cars.map(car => <CarsList key={car._id} car={car}/>)
                }
            </div>
        </div>
    );
};

export default Cars;