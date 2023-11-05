import { Link } from "react-router-dom";
import errorImg from "../assets/Error.svg";
const Error = () => {
  return (
    <div className="relative">
      <img src={errorImg} className="w-full h-screen" alt="" />
      <div>
        <Link to="/">
          <button className="btn btn-primary absolute lg:bottom-52 left-[45%]">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
