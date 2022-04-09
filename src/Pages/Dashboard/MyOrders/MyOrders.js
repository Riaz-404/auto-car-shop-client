import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Product from './Product/Product';


const MyOrders = () => {
    const { user } = useAuth();
    const [products, setProducts] = useState([]);
    let totalCost = 0;

    useEffect(() => {
        fetch(`http://localhost:8080/cart/product/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [user.email]);

    for(let i = 0; i < products.length; i++){
        totalCost += parseInt(products[i].carPrice);
    }

    return (
        <div>
            <div className="flex h-full flex-col bg-white">
                <div className="flex-1 px-4 pb-4 sm:px-6">
                    <div className="flex items-start justify-between">
                        <p className="text-lg font-medium text-gray-900"> Order List </p>
                    </div>

                    <div className="mt-8">
                        <div className="flow-root ">
                            <ul role="list" className="-my-6 divide-y divide-gray-200 overflow-x-auto">
                                {products.map((product) => <Product product={product}></Product>)}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${totalCost}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                        <Link
                            to="/dashboard/payment"
                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                            Checkout
                        </Link>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                            or{' '}
                            <button
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                // onClick={() => setOpen(false)}
                            >
                                <Link to='/cars'>Continue Shopping</Link><span aria-hidden="true"> &rarr;</span>
                            </button>
                        </p>
                    </div>
                </div>
            </div>
            </div>

            );
};

            export default MyOrders;