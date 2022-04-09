import React from 'react';
import { Paper, Button } from '@mui/material';
import ReactStars from 'react-rating-stars-component';
import defaultAvater from "../../../Images/profile-picture.png"
import { Link } from 'react-router-dom';

const ReviewCarousel = ({ review }) => {
    return (
        <Paper className='w-96 h-64 flex flex-col justify-center'>
            <div className='grid justify-items-center'>
                <img
                    className="h-16 w-16 rounded-full"
                    src={review.userPhotoUrl || defaultAvater}
                    alt="Avater"
                />
            </div>
            <h2 className='text-center text-2xl font-bold pt-2'>{review.name}</h2>
            <div className='grid justify-items-center'>
            <ReactStars
                                count={5}
                                size={32}
                                value= {review.reviewStar}
                            edit= {false}
                            />
            </div>
            <p className='text-center'>{review.review}</p>

            <Button className="CheckButton">
                <Link to={`/cars/${review.carId}`}>Check it out!</Link>
            </Button>
        </Paper>
    );
};

export default ReviewCarousel;