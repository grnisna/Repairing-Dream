import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { setAuthToken } from "../../../utils/api/JwtAuth";

const SocialMedia = () => {
    const {googleLogin} = useContext(authContext);
    
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';


    const handleGoogleLogin = () =>{
        googleLogin()
        .then(res => {
            const user = res.user.email;
            setAuthToken(user);

            navigate(from, {replace:true})
            
        })
        .catch(error => console.error(error.message))
    }
  return (
    <div>
      <div className="divider">OR</div>
        <button onClick={handleGoogleLogin} className="btn w-full btn-primary my-2">Google</button>
        <button className="btn w-full btn-secondary">Github</button>
    </div>
  );
};

export default SocialMedia;
