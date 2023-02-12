
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import loginImg from '../../../../assets/images/login/login.svg';
import { authContext } from "../../../../Contexts/AuthProvider/AuthProvider";

const Registration = () => {

    const {createUser } = useContext(authContext);

    const handleRegistration = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        

        createUser(email,password)
        .then( result => console.log(result.user))
        .catch( error => console.error(error.message))


    }

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 w-1/2">
          <form onSubmit={handleRegistration} className="card-body border-gray-600">
            <h1 className="text-3xl font-bold text-center"> Sign Up </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Conform Password</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="input input-bordered"
              />


              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">
                <span> Already have account? Login</span>
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent">Registration</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
