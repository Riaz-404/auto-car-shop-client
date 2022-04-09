import React, { useState } from 'react';
import { showNotification } from "@mantine/notifications";

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [fuelTypes, setFuelTypes] = useState('');
    const [deliveryTime, setDeliveryTime] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);


    const notification = (title, message, color) => {
        showNotification({
            title: title,
            message: message,
            autoClose: 4000,
            color: color,

        });
    }

    const handleClick = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('fuelTypes', fuelTypes);
        formData.append('deliveryTime', deliveryTime);
        formData.append('image', image);
        formData.append('description', description);

        fetch('https://auto-car-shop.herokuapp.com/cars', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                window.location.reload(false);
                notification("Success", "Product added successfully", "green");
            })
    }

    return (
        <div>
            <div className="px-4 sm:px-6">
                <h3 className="text-xl leading-6 font-bold text-gray-900">Add a product</h3>
            </div>
            <div className='m-5 px-5 py-3 border-2 rounded-lg'>
                <div className="col-span-6 sm:col-span-3 py-2">
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Product Name
                    </label>
                    <input
                        onChange={e => setName(e.target.value)}
                        type="text"
                        name="name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>


                <div className='flex flex-row-2 justify-between'>
                    <div className='col-span-6 sm:col-span-3 py-2'>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                            Price
                        </label>
                        <div className="mt-1 w-64 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                <span className="text-gray-500 sm:text-sm">$</span>
                            </div>
                            <input
                                onChange={e => setPrice(e.target.value)}
                                type="text"
                                name="price"
                                id="price"
                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                placeholder="0.00"
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center">
                                <label htmlFor="currency" className="sr-only">
                                    Currency
                                </label>
                                <select
                                    id="currency"
                                    name="currency"
                                    className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                                >
                                    <option>USD</option>
                                    <option>CAD</option>
                                    <option>EUR</option>
                                </select>
                            </div>
                        </div>
                    </div>





                    <div className="col-span-6 sm:col-span-3 py-2">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                            Fuel Types
                        </label>
                        <select onChange={e => setFuelTypes(e.target.value)}
                            name="fuelTypes"
                            className="focus:ring-indigo-500 focus:border-indigo-500 mt-2 h-8 py-0 pl-2 pr-7 border-gray-300 bg-transparent text-gray-500 sm:text-sm rounded-md"
                        >
                            <option disabled selected value> -- select an option -- </option>
                            <option>Petrol</option>
                            <option>Electric</option>
                            <option>Petrol/Electric</option>
                        </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3 py-2">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                            Approximate Delivery Time
                        </label>
                        <select onChange={e => setDeliveryTime(e.target.value)}
                            name="deliveryTime"
                            className="focus:ring-indigo-500 focus:border-indigo-500 mt-2 h-8 py-0 pl-2 pr-7 border-gray-300 bg-transparent text-gray-500 sm:text-sm rounded-md"
                        >
                            <option disabled selected value> -- select an option -- </option>
                            <option>Within a month</option>
                            <option>Within two months</option>
                            <option>Within three months</option>
                        </select>
                    </div>

                </div>



                <div>
                    <label className="block text-sm font-medium text-gray-700">Photo</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                            <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                            >
                                <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <div className="flex text-sm text-gray-600">
                                <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 "
                                >

                                    <input onChange={e => setImage(e.target.files[0])} id="image" name="image" type="file" accept=".jpeg,.jpg,.png">

                                    </input>
                                </label>


                            </div>

                        </div>
                    </div>
                </div>



                <div className='col-span-6 sm:col-span-3 py-2'>
                    <label htmlFor="about" className="my-2 block text-sm font-medium text-gray-700">
                    Description
                    </label>
                    <div className="my-2">
                        <textarea onChange={e => setDescription(e.target.value)}
                            id="Description"
                            name="Description"
                            rows={5}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                            defaultValue={''}
                        />
                    </div>
                </div>
                <button onClick={handleClick} className="py-2 px-3  text-sm text-white bg-gray-900 hover:bg-gray-700 rounded-full">
                    Add Product
                </button>
            </div>

        </div >
    );
};

export default AddProduct;