import React from 'react';

const SignUpForm = () => {
    return (
        <>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 md:mt-12">
                <div className="max-w-md w-full space-y-8">
                    <div>

                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 pb-5">Sign Up</h2>

                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm">
                            <input
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email" />

                            <input
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="fullname"
                                placeholder="Full Name" />



                            <input
                                type="password"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password" />
                            <input
                                type="password"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="confirm_password"
                                placeholder="Confirm Password" />

                        
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >

                                Create Account
                            </button>
                        </div>

                        

                        <p className="mt-2 text-center text-sm text-gray-600">
                            
                            <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Already have an account? Log in
                            </a>
                        </p>



                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUpForm;