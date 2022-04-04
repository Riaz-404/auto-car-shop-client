import React from 'react';
import {
    CalendarIcon,
    CurrencyDollarIcon,
    ShoppingCartIcon
} from '@heroicons/react/solid'
import ReactStars from 'react-rating-stars-component';
import fuelicon from "../../../Images/fuel-icon.ico"
import { Link } from 'react-router-dom';



const CarsList = ({ car }) => {
    const { _id, name, price, image, deliveryTime, fuel } = car;
    return (
        <div className='grid p-5 md:grid-cols-7 gap-4 sm: grid-cols-1'>
            <div className='col-span-2 relative w-full md:h-60 sm:h-50 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1'>
                <Link to={`/cars/${_id}`}><img className="object-center" src={image} alt="" srcset="" /></Link>
            </div>

            <div className="col-span-5 lg:flex lg:items-center lg:justify-between ">
                <div className="flex-1 min-w-0">
                    <Link to={`/cars/${_id}`}>
                        <h2 className="text-4xl font-bold leading-7 text-gray-900 sm:text-4xl sm:truncate">{name}</h2>
                    </Link>
                    <div>

                        <div className="mt-2 flex items-center text-base text-gray-500">
                            <CurrencyDollarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500" aria-hidden="true" />
                            {price}
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                            <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500" aria-hidden="true" />
                            {deliveryTime}
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                            
                                <img className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400' src={fuelicon}/>
                                <p>{fuel}</p>
                            
                        
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                            <ReactStars
                                count={5}
                                size={24}
                                value= {4.5}
                            edit= {false}
                            />
                        </div>
                        
                    </div>
                </div>
                <div className="mt-5 flex lg:mt-0 lg:ml-4">

                    <span className="sm:ml-3">
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <ShoppingCartIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                            Add to cart
                        </button>
                    </span>

                </div>
            </div>
        </div>








    );
};

export default CarsList;