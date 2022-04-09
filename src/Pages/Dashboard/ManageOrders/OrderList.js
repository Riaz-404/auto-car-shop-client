import React from 'react';
import DoneIcon from '@mui/icons-material/Done';
import { showNotification } from "@mantine/notifications";

const OrderList = ({ product }) => {
    const notification = (title, message, color) => {
        showNotification({
            title: title,
            message: message,
            autoClose: 4000,
            color: color,

        });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://auto-car-shop.herokuapp.com/cart/${product._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                window.location.reload(false);
                notification("Success", "Product Delivered successfully", "green");
            })
    }

    return (
        <tbody>
            <tr className="bg-white border">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {product.carName}
                </th>
                <td className="px-6 py-4">
                    {product.carColor}
                </td>
                <td className="px-6 py-4">
                    ${product.carPrice}
                </td>
                <td className="px-6 py-4">
                    {product.userEmail}
                </td>
                <td className="px-6 py-4">
                    {product.deliveryDate}
                </td>
                {
                    product.status === 'delivered' ?
                        <td className="px-6 py-4">
                            Delivered
                        </td>
                        :
                        <td className="px-6 py-4">
                            {product.status}
                        </td>
                }

                <td className="px-6 py-4 w-40 text-center">
                    {
                        product.status === 'Pending' ?
                            <button onClick={handleSubmit} className='rounded-md border-gray-800 p-1 bg-gray-800 mx-2'>
                                <DoneIcon className='text-white' />
                            </button>
                            :
                            <></>
                    }
                </td>
            </tr>
        </tbody>
    );
};

export default OrderList;