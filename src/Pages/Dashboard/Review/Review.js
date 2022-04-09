import React, { useState } from 'react';
import PurchasedProductList from './PurchasedProductList';
import { showNotification } from "@mantine/notifications";
import ReactStars from 'react-rating-stars-component';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const {user} = useAuth();
    const [selected, setSelected] = useState([]);
    const [star, setStar] = useState(0);
    const [review, setReview] = useState([]);

    const notification = (title, message, color) => {
        showNotification({
            title: title,
            message: message,
            autoClose: 4000,
            color: color,

        });
    }

    const ratingChanged = (newRating) => {
        setStar(newRating);
      };


    const handleSumbit = (e) => {
        e.preventDefault();


        const formData = new FormData();
        formData.append('name', selected.carName);
        formData.append('carId', selected.carId);
        formData.append('price', selected.carPrice);
        formData.append('userEmail', selected.userEmail);
        formData.append('userName', user.displayName);
        formData.append('userPhotoUrl', user.photoURL);
        formData.append('reviewStar', star);
        formData.append('review', review);

        fetch('https://auto-car-shop.herokuapp.com/review', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                window.location.reload(false);
                notification("Success", "Review added successfully", "green");
            })
    }


    return (
        <div>
            <div>
                <div className="px-4 sm:px-6">
                    <h3 className="text-lg leading-6 font-bold text-gray-900">Review</h3>
                </div>
                <div className='p-5'>
                    <PurchasedProductList selected={selected} setSelected={setSelected} />
                    <label htmlFor="about" className="my-2 block text-sm font-medium text-gray-700">
                        Review
                    </label>
                    <div>
                    <ReactStars onChange={ratingChanged}
                                count={5}
                                size={32}
                                value= {1}
                            edit= {true}
                            />
                    </div>
                    <div className="my-2">
                        <textarea onChange={e => setReview(e.target.value)}
                            id="about"
                            name="about"
                            rows={10}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                            defaultValue={''}
                        />
                    </div>
                    <button onClick={handleSumbit} className="p-3 text-sm text-white bg-gray-900 hover:bg-gray-700 rounded-full">
                        Add review
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Review;