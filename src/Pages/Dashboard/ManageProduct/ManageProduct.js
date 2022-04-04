import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ManageProduct = () => {
    return (
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-5">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Fuel Type
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Delivery Time
                        </th>
                        
                        <th scope="col" class="px-6 py-3 text-right">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Apple MacBook Pro 17"
                        </th>
                        <td class="px-6 py-4">
                            $2999
                        </td>
                        <td class="px-6 py-4">
                            Petrol
                        </td>
                        <td class="px-6 py-4">
                            Within a month
                        </td>
                        
                        <td class="px-6 py-4 flex justify-end ">
                            <button className='rounded-md border-gray-800 p-1 bg-gray-800 mx-2'>
                                <EditIcon className='text-white' />
                            </button>
                            <button className='rounded-md border-gray-800 p-1 bg-red-900'>
                                <DeleteIcon className='text-white' />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


    );
};

export default ManageProduct;