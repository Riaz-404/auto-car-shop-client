import React from 'react';



const ManageOrders = () => {
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
                        <th scope="col" class="px-6 py-3 text-right">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Apple MacBook Pro 17"
                        </th>
                        <td class="px-6 py-4">
                            Sliver
                        </td>
                        <td class="px-6 py-4">
                            $2999
                        </td>
                        <td class="px-6 py-4">
                            Laptop
                        </td>
                        <td class="px-6 py-4 w-40">
                            <select class="form-select appearance-none block w-32 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                <option selected>Pending</option>
                                <option value="delivered">Delivered</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


    );
};

export default ManageOrders;