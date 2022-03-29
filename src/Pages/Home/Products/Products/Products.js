import React from 'react';
import Product from '../Product/Product';
import car1 from '../../../../Images/car-1.jpg';
import car2 from '../../../../Images/car-2.jpg';
import car3 from '../../../../Images/car-3.jpg';
import car4 from '../../../../Images/car-4.jpg';
import car5 from '../../../../Images/car-5.jpg';
import car6 from '../../../../Images/car-6.jpg';


const products = [
    {
        name: 'LAMBORGHINI',
        price: '$20000',
        image: car1,
    },
    {
        name: 'FERRARI RED CAR',
        price: '$30000',
        image: car2,
    },
    {
        name:'BMW E46 M3 DISKI SERIE',
        price: '$25000',
        image: car3,
    },
    {
        name: 'VOLKSWAGEN SCIROCCO 2016',
        price: '$25000',
        image: car4,
    },
    {
        name: 'PORSCHE CAYEN LAST',
        price: '$25000',
        image: car5,
    },
    {
        name: 'LEXUS GS F',
        price: '$25000',
        image: car6,
    }
]

const Products = () => {
    return (
        <div className="m-9 p-5">
        <p style={{fontSize: '40px', fontWeight: 'bold'}} className="my-9">FEATURED CARS</p>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-9">
            
            {
                products.map(product => <Product product={product}></Product>)
            }
        </div>
        </div>
    );
};

export default Products;