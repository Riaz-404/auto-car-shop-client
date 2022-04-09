import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://auto-car-shop.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => { 
                setProducts(data);
            })
    }, []);

    return (
        <div className="m-9 p-5">
        <p style={{fontSize: '40px', fontWeight: 'bold'}} className="my-9">FEATURED CARS</p>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-9">
            
            {
                products.slice(0,6).map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>
        </div>
    );
};

export default Products;