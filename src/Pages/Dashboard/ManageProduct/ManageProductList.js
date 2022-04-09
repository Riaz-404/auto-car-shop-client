import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { showNotification } from "@mantine/notifications";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const ManageProductList = ({ car }) => {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = useState(car.name);
    const [price, setPrice] = useState(car.price);
    const [fuelTypes, setFuelTypes] = useState(car.fuelTypes);
    const [deliveryTime, setDeliveryTime] = useState(car.deliveryTime);
    const [description, setDescription] = useState(car.description);
    const [image, setImage] = useState(null);

    const notification = (title, message, color) => {
        showNotification({
            title: title,
            message: message,
            autoClose: 4000,
            color: color,

        });
    }

    
    const handleUpdateButton = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('fuelTypes', fuelTypes);
        formData.append('deliveryTime', deliveryTime);
        formData.append('description', description);
        formData.append('image', image);
        fetch(`https://auto-car-shop.herokuapp.com/cars/${car._id}`, {
            method: 'PUT',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                window.location.reload(false);
                notification("Success", "Product updated successfully", "green");
            })
            .catch(err => console.log(err));
    }

    const handleRemoveButton = (e) => {
        e.preventDefault();

        fetch(`https://auto-car-shop.herokuapp.com/cars/remove/${car._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                notification("Success", "Car Deleted Successfully", "green");
                window.location.reload();

            })
    }

    const handleDelete = (e) => {
        confirmAlert({                       
            message: `Are you sure want to delete ${car.name} parmanently?`,
            buttons: [
                {
                  label: 'Confirm',
                  onClick: () => handleRemoveButton(e)
                },
                {
                  label: 'Cancel',
                  onClick: () => {}
                }
              ] ,     // Action after Cancel
            overlayClassName: "overlay-custom-class-name"      // Custom overlay class name
          })
        
    };

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} class="bg-white border">
                <TableCell scope="row" class="px-6 py-4">
                    <img className='h-24 rounded-sm' src={`data:image/jpeg;base64,${car.image}`} alt="" srcset="" />
                </TableCell>
                <TableCell class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{car.name}</TableCell>
                <TableCell class="px-6 py-4">${car.price}</TableCell>
                <TableCell class="px-6 py-4">{car.fuelTypes}</TableCell>
                <TableCell class="px-6 py-4">{car.deliveryTime}</TableCell>
                <TableCell>
                    <button onClick={() => setOpen(!open)} className='rounded-md border-gray-800 p-1 bg-gray-800 mx-2'>
                        <EditIcon className='text-white' />
                    </button>
                    <button onClick={handleDelete} className='rounded-md border-gray-800 p-1 bg-red-900'>
                        <DeleteIcon className='text-white' />
                    </button>
                </TableCell>
            </TableRow>
            <TableRow className='border-x'>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box>
                            <div className='mt-3 mb-5 px-5'>
                                <div className="col-span-6 sm:col-span-3 py-2">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                        Product Name
                                    </label>
                                    <input
                                        onChange={e => setName(e.target.value)}
                                        type="text"
                                        name="name"
                                        defaultValue={car.name}
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
                                                defaultValue={car.price}
                                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                                
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
                                        <select 
                                            onChange={e => setFuelTypes(e.target.value)}
                                            name="fuelTypes"
                                            defaultValue={car.fuelTypes}
                                            className="focus:ring-indigo-500 focus:border-indigo-500 mt-2 h-8 py-0 pl-2 pr-7 border-gray-300 bg-transparent text-gray-500 sm:text-sm rounded-md"
                                        >
                                            
                                            <option>Petrol</option>
                                            <option>Electric</option>
                                            <option>Petrol/Electric</option>
                                        </select>
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 py-2">
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                            Approximate Delivery Time
                                        </label>
                                        <select
                                            onChange={e => setDeliveryTime(e.target.value)}
                                            name="deliveryTime"
                                            defaultValue={car.deliveryTime}
                                            className="focus:ring-indigo-500 focus:border-indigo-500 mt-2 h-8 py-0 pl-2 pr-7 border-gray-300 bg-transparent text-gray-500 sm:text-sm rounded-md"
                                        >
                                            
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
                                        <textarea
                                            onChange={e => setDescription(e.target.value)}
                                            id="about"
                                            name="about"
                                            defaultValue={car.description}
                                            rows={5}
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                            
                                        />
                                    </div>
                                </div>
                                <button onClick={handleUpdateButton} class="py-2 px-3 text-sm text-white bg-gray-900 hover:bg-gray-700 rounded-full">
                                    Update Details
                                </button>
                            </div>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
};

export default ManageProductList;

