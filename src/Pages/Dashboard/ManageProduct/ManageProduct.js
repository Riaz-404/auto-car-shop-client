import { Paper } from '@mantine/core';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';

import ManageProductList from './ManageProductList';

// const ManageProduct = () => {



//     return (



//     );
// };

// export default ManageProduct;






export default function ManageProduct() {
    const [cars, setCars] = useState([]);
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        fetch('https://auto-car-shop.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => {
                setCars(data);
            })
    }, [])

    console.log(cars);
    return (
        <div class="relative overflow-x-auto">
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table" className="w-full text-sm text-left text-gray-500">
                    <TableHead className="text-xs text-gray-700 uppercase bg-gray-5">
                        <TableRow>
                            <TableCell scope="col" class="px-6 py-3">
                                Product Image
                            </TableCell>
                            <TableCell scope="col" class="px-6 py-3">
                                Product name
                            </TableCell>
                            <TableCell scope="col" class="px-6 py-3">
                                Price
                            </TableCell>
                            <TableCell scope="col" class="px-6 py-3">
                                Fuel Type
                            </TableCell>
                            <TableCell scope="col" class="px-6 py-3">
                                Delivery Time
                            </TableCell>

                            <TableCell scope="col" class="px-6 py-3">
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            cars.map((car) => <ManageProductList car={car}></ManageProductList>)
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
