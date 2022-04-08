import React, { useState } from 'react';
import { showNotification } from "@mantine/notifications";

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const notification = (title, message, color) => {
        showNotification({
            title: title,
            message: message,
            autoClose: 4000,
            color: color,

        });
    }

    const handleSubmit = () => {
        fetch(`http://localhost:8080/users/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
                },
                body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount){
                    notification("Success", "Admin added sucessfully", "green");
                }
                else{
                    notification("Default", "Already an admin", "blue");
                }
            })
    }

    return (
        <div>
            <div className="px-4 sm:px-6">
                <h3 className="text-xl leading-6 font-bold text-gray-900">Make An Admin</h3>
            </div>
            <div className='m-5 p-2'>
                <div className="col-span-6 sm:col-span-3 py-2">
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Enter Email Address
                    </label>
                    <input onChange={(e) => setEmail(e.target.value)}
                        id="emailAddress"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="mt-2 w-96 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
                <button onClick={handleSubmit} class="py-2 px-4 text-sm text-white bg-gray-900 hover:bg-gray-700 rounded-full">
                    Make Admin
                </button>
            </div>
        </div>
    );
};

export default MakeAdmin;