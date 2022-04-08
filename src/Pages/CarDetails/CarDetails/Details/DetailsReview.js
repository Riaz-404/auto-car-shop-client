import React from 'react';
import ReactStars from 'react-rating-stars-component';
import defaultAvater from '../../../../Images/profile-picture.png';

const DetailsReview = ({review}) => {
    
    return (
        <li className="flex py-6">
            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-full border border-gray-200">
                <img
                    src={review.userPhotoUrl === "null" ? defaultAvater : review.userPhotoUrl}
                    alt={review.carName}
                    className="h-full w-full object-cover object-center"
                />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                             {review.userName} 
                        </h3>
                    </div>
                    <p className="text-sm text-gray-500"> {review.userEmail}</p>
                    <ReactStars 
                                count={5}
                                size={24}
                                value= {review.reviewStar}
                            edit= {false}
                            />
                            <p className="text-base">{review.review}</p>
                </div>
                
            </div>
        </li>
    );
};

export default DetailsReview;