import React from 'react';
import PurchasedProductList from './PurchasedProductList';

const Review = () => {
    return (
        <div>
            <div>
                <div className="px-4 sm:px-6">
                    <h3 className="text-lg leading-6 font-bold text-gray-900">Review</h3>
                </div>
                <div className='p-5'>
                    <PurchasedProductList />
                    <label htmlFor="about" className="my-2 block text-sm font-medium text-gray-700">
                        Review
                    </label>
                    <div className="my-2">
                        <textarea
                            id="about"
                            name="about"
                            rows={10}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                            defaultValue={''}
                        />
                    </div>
                    <button class="p-3 text-white bg-gray-900 hover:bg-gray-700 rounded-full">
                        Add review
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Review;