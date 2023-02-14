import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { authContext } from "../../../Contexts/AuthProvider/AuthProvider";
import checkoutImage from "../../../assets/images/checkout/checkout.png";

const Checkout = () => {
  const { title,price,_id } = useLoaderData();
  const { user } = useContext(authContext);
  const navigate = useNavigate();

  const handleOrder = event =>{
    event.preventDefault(); 
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered"; 
    const message = form.message.value;
    const phone = form.phone.value;

    const order = {
        customerName:name,
        email,
        phone,
        message,
        price,
        serviceId : _id,
        serviceName:title,
    };

    fetch('http://localhost:5000/order', {
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(order)
    })
    .then(res => res.json())
    .then( data => {
        console.log(data);
        if(data){
            alert('succesfull added your order and wait for confirmation');
            navigate('/orders');
            form.reset();
        }
    })
    .catch(error => console.log(error.message));

  };


  // The limis of word in textArea field 
  const handleInputChange = (event) => {
    const maxWords = 10;
    const inputValue = event.target.value;
    const wordCount = inputValue.split(' ').length;
    console.log(wordCount)
    if (wordCount >= maxWords) {
      alert('do not write any more')
    }
  };



  return (
    <div>
      <div className="relative my-14">
        <img src={checkoutImage} className="w-full" alt="" />
        <h2 className="absolute flex justify-start gap-5 transform -translate-y-1/2 left-5 top-1/2 text-white font-bold text-4xl ">
          Check Out
        </h2>
        <h3 className="absolute flex justify-center items-center gap-5 transform -translate-y-1/2 left-5 bottom-0 text-white font-bold text-4xl bg-accent rounded p-5 ">
          Home/checkout
        </h3>
      </div>

        <div>
            <h2 className="text-3xl text-secondary text-center ">Service Name: <span className="text-primary" >{title} </span></h2>
            <h3 className="text-3xl text-secondary text-center">Service Price: <span className="text-accent text-3xl font-bold">${price}</span></h3>
        </div>

      <form onSubmit={handleOrder} className="p-10 bg-gray-200 my-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            className="input input-bordered input-primary w-full "
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            className="input input-bordered input-primary w-full "
          />
          <input
            type="text"
            placeholder="Your Phone"
            name="phone"
            className="input input-bordered input-primary w-full "
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            defaultValue={user?.email}
            readOnly
            className="input input-bordered input-primary w-full "
          />

          
        </div>
        <textarea
            className="textarea textarea-primary w-full my-5"
            placeholder="Your Message"
            name="message"
            onChange={handleInputChange} 

          ></textarea>

          <input type="submit" value="Order Confirm" className="btn btn-accent w-full" />
      </form>
    </div>
  );
};

export default Checkout;
