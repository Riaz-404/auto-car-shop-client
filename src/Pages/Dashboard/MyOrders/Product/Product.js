import React, { useEffect, useState } from 'react';
import { showNotification } from "@mantine/notifications";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Product = ({ product }) => {
    const [car, setCar] = useState([]);

    const notification = (title, message, color) => {
        showNotification({
            title: title,
            message: message,
            autoClose: 4000,
            color: color,

        });
    }

    useEffect(() => {
        fetch(`http://localhost:8080/cars/${product.carId}`)
            .then(res => res.json())
            .then(data => {
                setCar(data);
            })
    }, [product.carId]);


    const handleRemoveButton = (e) => {
        e.preventDefault();

        fetch(`http://localhost:8080/cart/remove/${product._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                notification("Success", "Product removed from cart", "green");
                window.location.reload();

            })
    }


    const submit = (e) => {
        confirmAlert({                       
            message: `Are you sure want to remove ${product.carName} from your order?`,
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
        <li key={product.id} className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                    src={`data:image/jpeg;base64,${car.image}`}
                    alt={product.carName}
                    className="h-full w-full object-cover object-center"
                />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <a href={`/cars/${car._id}`}> {product.carName} </a>
                        </h3>
                        <p className="ml-4">${product.carPrice}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">Color: {product.carColor}</p>
                    <p className="mt-1 text-sm text-gray-500">Delivery Date: {product.deliveryDate}</p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Status: <span className='font-bold'>{product.status}</span></p>

                    <div className="flex">
                        <button onClick={submit} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Remove
                        </button>
                    </div>
                </div>
            </div>
            
        </li>
    );
};

export default Product;