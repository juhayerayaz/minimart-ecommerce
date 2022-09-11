import React from 'react';
import headphone from "../../Images/headphone.png";
import nike from "../../Images/nike-shoe.png";
import shoeMen from "../../Images/shoe-men.png";
import suit from "../../Images/suit.png";
import shoeWomen from "../../Images/shoe-women.png";
import { Carousel } from '3d-react-carousal';
import './Home.css'

const Home = () => {
    let slides = [
        <img src={headphone} alt="1" />,
        <img src={nike} alt="2" />,
        <img src={shoeMen} alt="3" />,
        <img src={shoeWomen} alt="4" />,
        <img src={suit} alt="5" />
    ];
    return (
        <div>
            <h1>Hello from aiaz branch</h1>
            <div className='bg-color my-8 p-12'>
                <Carousel slides={slides} />
            </div>

            <div></div>
        </div>
    );
};

export default Home;