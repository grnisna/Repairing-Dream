import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="w-full mx-auto text-center">
      <h2 className="text-accent text-xl font-bold py-4">Services</h2>
      <h1 className="text-5xl font-bold my-5"> Our Service Area</h1>
      <p className="w-3/5 mx-auto text-l text-gray-600 ">
        The majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.{" "}
      </p>

      <div className="grid grid-cols-3 gap-5">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>



    </div>
  );
};

export default Services;
