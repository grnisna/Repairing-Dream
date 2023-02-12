import React from "react";
import person from '../../../../assets/images/about_us/person.jpg'
import parts from '../../../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img
            src={person}
            className=" rounded-lg w-4/5"
            alt=""
            />
          <img
            src={parts}
            className=" absolute rounded-lg w-3/5 right-5 bottom-5 mt-10"
            alt=""
            />
        </div>
        <div className="w-1/2">
          <h1 className="text-xl font-bold text-orange-600 ">About us</h1>
          <h1 className="py-6 font-bold  text-5xl text-black">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="text-xl text-gray-600 ">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="text-xl text-gray-600">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>

          <button className="btn btn-accent my-5">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
