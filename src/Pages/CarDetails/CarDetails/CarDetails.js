import React from 'react';
import { useParams } from "react-router-dom";
import NavigationBar from '../../Home/NavigationBar/NavigationBar';
import Details from './Details/Details';

const CarDetails = () => {
    const {id} = useParams();
    
    return (
        <div>
            <NavigationBar/>
            <Details id={id}/>
        </div>
    );
};

export default CarDetails;