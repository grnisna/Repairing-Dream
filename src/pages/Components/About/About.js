import React from 'react';
import checkoutImage from '../../../assets/images/checkout/checkout.png';

const About = () => {
    return (
        <div className="relative my-14">
        <img src={checkoutImage} className="w-full" alt="" />
        <h2 className="absolute flex justify-start gap-5 transform -translate-y-1/2 left-5 top-1/2 text-white font-bold text-4xl ">
          About Us
        </h2>
        <h3 className="absolute flex justify-center items-center gap-5 transform -translate-y-1/2 left-5 bottom-0 text-white font-bold text-4xl bg-accent rounded p-5 ">
          Home/about
        </h3>
      </div>
    );
};

export default About;