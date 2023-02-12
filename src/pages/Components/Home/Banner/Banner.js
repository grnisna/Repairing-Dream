import React from "react";
import imageOne from "../../../../assets/images/banner/1.jpg";
import imageTwo from "../../../../assets/images/banner/2.jpg";
import imageThree from "../../../../assets/images/banner/3.jpg";
import imageFour from "../../../../assets/images/banner/4.jpg";
import CaroselItems from "./CaroselItems";

const Banner = () => {

    const slideData = [
        {
            image:imageOne,
            prev:4,
            id:1,
            next:2
        },
        {
            image:imageTwo,
            prev:1,
            id:2,
            next:3
        },
        {
            image:imageThree,
            prev:2,
            id:3,
            next:4
        },
        {
            image:imageFour,
            prev:3,
            id:4,
            next:1
        }
    ]


  return (
    <div className="carousel w-full mb-[-213px]">

        {
            slideData.map(slide => <CaroselItems key={slide.id} slide={slide} />)
        }
      

    </div>
  );
};

export default Banner;
