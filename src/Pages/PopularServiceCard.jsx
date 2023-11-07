import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const PopularServiceCard = ({ service }) => {
  const { user } = useContext(AuthContext);
  const { serviceName, description, photo, yourName, price } = service;
  return (
    <div>
      <div className="card card-compact  bg-[#fffcf6] hover:border border-green-400 cursor-pointer shadow-xl">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{serviceName}</h2>
          <p>{description}</p>
          <div className="card-actions justify-between items-center">
            <div className="avatar">
              <div className="w-54 rounded border border-green-500">
                <img src={user?.photoURL} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-green-600">Price:${price}</h3>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">Provider:{yourName}</p>
            <button className="btn btn-primary text-white">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularServiceCard;
