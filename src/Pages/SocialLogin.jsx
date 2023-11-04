import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const handleSocialLogin = (media) => {
    media();
  };
  return (
    <div>
      <div className="divider">Continue With</div>
      <div className="flex justify-center">
        <button
          className="font-bold"
          onClick={() => handleSocialLogin(googleLogin)}
        >
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
