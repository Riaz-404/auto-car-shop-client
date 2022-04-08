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
        fetch(`http://localhost:8080/cart/${product._id}`, {
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
            <tr class="bg-white border">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {product.carName}
                </th>
                <td class="px-6 py-4">
                    {product.carColor}
                </td>
                <td class="px-6 py-4">
                    ${product.carPrice}
                </td>
                <td class="px-6 py-4">
                    {product.userEmail}
                </td>
                <td class="px-6 py-4">
                    {product.deliveryDate}
                </td>
                {
                    product.status === 'delivered' ?
                        <td class="px-6 py-4">
                            Delivered
                        </td>
                        :
                        <td class="px-6 py-4">
                            {product.status}
                        </td>
                }

                <td class="px-6 py-4 w-40 text-center">
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