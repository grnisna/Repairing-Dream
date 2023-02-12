import React from 'react';
import './CaroselItems.css';

const CaroselItems = ({slide}) => {
    const {image, id, prev, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full ">
        <div className="gradiendAdded">
          <img alt="images" src={image} className="w-full rounded imageHeight " />
        </div>

        {/* Banner Text */}
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-24 top-1/4">
          <h1 className="text-5xl font-bold text-base-100 ">
            Affordable <br /> Price For Car <br /> Servicing
          </h1>
        </div>
        {/* Banner paragraph */}
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-24 top-1/4 w-2/5 mt-28">
          <p className="text-base-100 text-l">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
        </div>
        {/* Banner button */}
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2  top-1/2 left-24">
          <button className="btn btn-active btn-accent">
            Discover More
        </button>

          <button className="btn btn-outline btn-accent">
            Latest Projects
          </button>
        </div>

        {/* banner icons */}
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-1/4">
          <a href={`#slide${prev}`} className="btn btn-circle">
            ❮
          </a>
          <a href={`#slide${next}`} className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    );
};

export default CaroselItems;