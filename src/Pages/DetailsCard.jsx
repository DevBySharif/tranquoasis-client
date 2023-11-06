import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const DetailsCard = ({ foundService }) => {
  console.log(foundService);
  const { user } = useContext(AuthContext);
  const {
    serviceName,
    description,
    photo,
    price,
    serviceArea,
    yourEmail,
    yourName,
  } = foundService;
  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-12">{serviceName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        <div className="col-span-3">
          <h3 className="text-xl font-semibold mb-9">Service</h3>
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img src={photo} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{serviceName}</h2>
              <p>{description}</p>
              <p>Price:${price}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Book</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <h3 className="text-xl font-semibold mb-9">Provider</h3>
          <div className="avatar flex justify-center">
            <div className="w-24 rounded border border-green-500">
              <img src={user?.photoURL} />
            </div>
          </div>
          <div className="text-center text-3xl font-medium">
            <p>Name: {yourName}</p>
            <p>Email: {yourEmail}</p>
            <p>Area: {serviceArea}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
