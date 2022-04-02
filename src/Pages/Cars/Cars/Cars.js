import React from 'react';
import NavigationBar from '../../Home/NavigationBar/NavigationBar';
import CarsList from '../Cars List/CarsList';
import car1 from "../../../Images/car-1.jpg";
import car2 from "../../../Images/car-2.jpg";
import car3 from "../../../Images/car-3.jpg";
import car4 from "../../../Images/car-4.jpg";
import car5 from "../../../Images/car-5.jpg";
import car6 from "../../../Images/car-6.jpg";

const cars = [
    {
        _id: 1,
        name: 'LAMBORGHINI',
        price: '$20000',
        image: car1,
        fuel: 'Petrol',
        deliveryTime: 'within a month'
    },
    {
        _id: 2,
        name: 'FERRARI RED CAR',
        price: '$30000',
        image: car2,
        fuel: 'Petrol',
        deliveryTime: 'within a month'
    },
    {
        _id: 3,
        name:'BMW E46 M3 DISKI SERIE',
        price: '$25000',
        image: car3,
        fuel: 'Electric',
        deliveryTime: 'within a month'
    },
    {
        _id: 4,
        name: 'VOLKSWAGEN SCIROCCO 2016',
        price: '$25000',
        image: car4,
        fuel: 'Electric',
        deliveryTime: 'within a month'
    },
    {
        _id: 5,
        name: 'PORSCHE CAYEN LAST',
        price: '$25000',
        image: car5,
        fuel: 'Electric',
        deliveryTime: 'within a month'
    },
    {
        _id: 6,
        name: 'LEXUS GS F',
        price: '$25000',
        image: car6,
        fuel: 'Fuel/Electric',
        deliveryTime: 'within a month'
    }
]

const Cars = () => {
    return (
        <div>
            <NavigationBar/>

            <div className='m-10'>
                {
                    cars.map(car => <CarsList car={car}/>)
                }
            </div>
        </div>
    );
};

export default Cars;