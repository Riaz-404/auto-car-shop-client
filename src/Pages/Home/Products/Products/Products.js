import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { Loader } from '@mantine/core';


const Products = () => {
    const [products, setProducts] = useState([]);
    const [loadingData, setLoadingData] = useState(false);

    useEffect(() => {
        setLoadingData(true);
        fetch('https://auto-car-shop.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoadingData(false);
            })
    }, []);

    return (
        <div className="m-9 p-5">
            <p style={{ fontSize: '40px', fontWeight: 'bold' }} className="my-9">FEATURED CARS</p>
            {
                loadingData ?
                    <div className='m-10 flex items-center justify-center'>
                        <Loader variant="bars" color="#1f2937" size="lg" />
                    </div>
                    :
                    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-9">
                        {
                            products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
                        }
                    </div>
            }

        </div>
    );
};

export default Products;