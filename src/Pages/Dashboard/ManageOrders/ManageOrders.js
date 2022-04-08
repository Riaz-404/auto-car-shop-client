import React, { useEffect, useState } from 'react';
import OrderList from './OrderList';



const ManageOrders = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/cart')
            .then(res => res.json())    
            .then(data => {
                setProducts(data);
            })
    }, []);

    console.log(products);

    return (
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-5">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Buyer
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Delivery Date
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Delivered Action
                        </th>
                    </tr>
                </thead>
                {
                    products.map((product) => <OrderList product={product}></OrderList>)
                }
                
            </table>
        </div>


    );
};

export default ManageOrders;