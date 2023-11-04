import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import SocialLogin from "./SocialLogin";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;

    setRegisterError("");
    setRegistrationSuccess("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 character or longer");
      return;
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
        password
      )
    ) {
      setRegisterError(
        "Your password should have at least one uppercase letter, one lowercase letter, one number and one special character "
      );
      return;
    } else if (!accepted) {
      setRegisterError("Please accept our terms and condition");
      return;
    }

    // create user
    createUser(email, password)
      .then(() => {
        // setRegistrationSuccess("Registration Successful");
        toast.success("Registration Successful!");
        navigate(location?.state ? location.state : "/login");
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div>
              <input type="checkbox" name="terms" />
              <label className="ml-3" htmlFor="">
                Please accept our <a href="">terms and conditions</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral">Register</button>
            </div>
            {registerError && <p className="text-red-500">{registerError}</p>}
            {registrationSuccess && (
              <p className="text-green-500">{registrationSuccess}</p>
            )}
            <p className="flex justify-between">
              Already have an account?{" "}
              <Link className="text-blue-600" to="/login">
                Login
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
