import React, { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../../../assets/images/login/login.svg";
import { authContext } from "../../../../Contexts/AuthProvider/AuthProvider";
import { setAuthToken } from "../../../../utils/api/JwtAuth";
import SocialMedia from "../../../Shared/socialMedia/SocialMedia";

const Login = () => {
  const { loginUser } = useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const user = result.user.email;
        setAuthToken(user);
        navigate(from, {replace:true})
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 w-1/2">
          <form onSubmit={handleLogin} className="card-body ">
            <h1 className="text-3xl font-bold text-center">Login </h1>
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
              <label className="label">
                <Link to="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-accent">
                Login
              </button>
            </div>
            <p className="my-5">
              Don't Sign up ?
              <span className="mx-2">
                <Link to="/registration" className="text-primary">
                  Registration
                </Link>
              </span>
              now
            </p>
          </form>
          <div className=" p-6">
              <SocialMedia />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
