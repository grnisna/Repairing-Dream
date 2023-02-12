import React from "react";
import {AiOutlineArrowRight} from 'react-icons/ai';
import { Link } from "react-router-dom";

const Service = ({service}) => {
  const  {image,price,title,_id} = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-lg " />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-between">
          <div className="">
            <h2 className="text-accent font-bold">Price: ${price} </h2>
          </div>
          <Link to={`/checkout/${_id}`} className="text-accent btn btn-outline">  <AiOutlineArrowRight/></Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
