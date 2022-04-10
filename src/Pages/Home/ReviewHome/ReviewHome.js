import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import ReviewCarousel from './ReviewCarousel';
import { Loader } from '@mantine/core';

const ReviewHome = () => {
    const [reviews, setReviews] = useState([]);
    const [loadingData, setLoadingData] = useState(false);

    useEffect(() => {
        setLoadingData(true);
        fetch('https://auto-car-shop.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setLoadingData(false);
            })
    }, []);


    return (
        <div className="m-9 p-5">
            <p style={{ fontSize: '40px', fontWeight: 'bold' }} className="my-9">OUR TESTIMONIALS</p>
            {
                loadingData ?
                    <div className='m-10 flex items-center justify-center'>
                        <Loader variant="bars" color="#1f2937" size="lg" />
                    </div>
                    :
                    <div className='grid md:grid-cols-3 sm:grid-cols-1'>
                        <div></div>
                        <Carousel className=''>
                            {
                                reviews.map((review, i) => <ReviewCarousel key={i} review={review} />)
                            }
                        </Carousel>
                        <div></div>
                    </div>
            }


        </div>
    );
};

export default ReviewHome;