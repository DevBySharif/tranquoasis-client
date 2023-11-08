import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import logo from "../assets/TranquoasisWhite.svg";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };
  return (
    <div className="navbar bg-[#325343]">
      <div className="navbar bg-transparent max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost text-black lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink className="lg:text-white font-bold" to="/">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink className="lg:text-white font-bold" to="/services">
                  Services
                </NavLink>
              </li>
              {user ? (
                <li>
                  <NavLink className="lg:text-white font-bold">
                    Dashboard
                  </NavLink>
                  <ul className="p-2 font-semibold">
                    <li>
                      <Link to="/addService">Add-A-Service</Link>
                    </li>
                    <li>
                      <Link to="/manage-services">Manage Services</Link>
                    </li>
                    <li>
                      <Link to="/my-schedules">My Schedules</Link>
                    </li>
                  </ul>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink className="lg:text-white font-bold" to="/">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink className="lg:text-white font-bold" to="/services">
                Services
              </NavLink>
            </li>
            {user ? (
              <li tabIndex={0}>
                <details>
                  <summary className="lg:text-white font-bold">
                    Dashboard
                  </summary>
                  <ul className="p-2 font-semibold">
                    <li>
                      <Link to="/addService">Add-A-Service</Link>
                    </li>
                    <li>
                      <Link to="/manage-services">Manage Services</Link>
                    </li>
                    <li>
                      <Link to="/my-schedules">My Schedules</Link>
                    </li>
                  </ul>
                </details>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-info btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt={user.displayName} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-content rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm text-white btn-ghost">
                    {user.displayName}
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-sm text-white btn-ghost"
                    onClick={handleSignOut}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm text-white btn-ghost">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
