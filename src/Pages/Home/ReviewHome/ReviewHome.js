import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import ReviewCarousel from './ReviewCarousel';

const ReviewHome = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, []);

    console.log(reviews);

    return (
        <div className="m-9 p-5">
            <p style={{ fontSize: '40px', fontWeight: 'bold' }} className="my-9">OUR TESTIMONIALS</p>
            <div className='grid md:grid-cols-3 sm:grid-cols-1'>
                <div></div>
                <Carousel className=''>
                    {
                        reviews.map((review, i) => <ReviewCarousel key={i} review={review} />)
                    }
                </Carousel>
                <div></div>
            </div>

        </div>
    );
};

export default ReviewHome;