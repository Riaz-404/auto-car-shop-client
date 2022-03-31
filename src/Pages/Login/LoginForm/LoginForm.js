import React from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import googleSvg from '../../../Images/googleLogo.svg';
import facebookSvg from '../../../Images/FacebookLogo.svg';
import githubSvg from '../../../Images/githubLogo.svg';
import useAuth from '../../../hooks/useAuth';

const LoginForm = () => {
    const { signInWithGoogle } = useAuth();
    const handleGoogleSignIn = () => {
        console.log("clicked")
        console.log(useAuth)
        signInWithGoogle();
    }
    return (
        <>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 md:mt-16">
                <div className="max-w-md w-full space-y-8">
                    <div>

                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 pb-5">Log in to your account</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            
                            <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
                                New User? Create an account
                            </a>
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div>


                            <div className="text-sm text-center">
                                <a href="google.com" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                </span>
                                Log in
                            </button>
                        </div>

                        <p className="mt-2 text-center text-sm text-gray-600">
                            or Continue with:
                            
                        </p>


                        
                    </form>
                    <div className='grid grid-cols-3 gap-3'> 
                        <button onClick={handleGoogleSignIn}
                                className="group relative w-full flex justify-center py-2 px-4 border border-solid border-indigo-600 text-sm font-medium rounded-md  hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                
                            <img className='h-5' src={googleSvg} alt="googleLogo"/>
                            </button>
                        <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-solid border-indigo-600 text-sm font-medium rounded-md  hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                
                                <img className='h-5' src={facebookSvg} alt="facebookLogo"/>

                            </button>
                        <button className="group relative w-full flex justify-center py-2 px-4 border border-solid border-indigo-600 text-sm font-medium rounded-md  hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                
                                <img className='h-5' src={githubSvg} alt="githubLogo"/>

                            </button>


                        </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;