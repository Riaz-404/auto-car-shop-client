import { Loader } from '@mantine/core';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import NavigationBar from '../../Home/NavigationBar/NavigationBar';

const ForgetPass = () => {
    const {isLoading, passwordReset} = useAuth();
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        const email = e.target.value;
        setEmail(email);
        console.log(email);
    }

    const handleClick = (e) => {
        e.preventDefault();
        passwordReset(email);
    }

    return (
        <div>
            <NavigationBar></NavigationBar>
            <>
                <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 md:mt-16">
                    <div className="max-w-md w-full space-y-8">
                        <div>

                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 pb-5">Forget your password?</h2>
                            
                        </div>
                        <form className="mt-8 space-y-6" action="#" method="POST">
                            
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input onChange={handleChange}
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Email address"
                                    />
                                </div>
                                
                            </div>

                            

                            {
                                isLoading ?
                                    <div className='w-full h-9 flex  justify-center py-2 px-4'>
                                        <Loader color="indigo" variant="dots" />
                                    </div>
                                    :
                                    <div>
                                        <button onClick={handleClick}
                                            className="group relative w-full h-9 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            
                                            Reset your password
                                        </button>
                                    </div>
                            }

                            



                        </form>
                        
                    </div>
                </div>
            </>
        </div>
    );
};

export default ForgetPass;