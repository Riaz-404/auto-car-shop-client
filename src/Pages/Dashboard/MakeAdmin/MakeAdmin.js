import React from 'react';

const MakeAdmin = () => {
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
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="mt-2 w-96 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
                <button class="py-2 px-4 text-sm text-white bg-gray-900 hover:bg-gray-700 rounded-full">
                    Make Admin
                </button>
            </div>
        </div>
    );
};

export default MakeAdmin;