import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PopularServiceCard from "./PopularServiceCard";

const PopularServices = () => {
  const [popularService, setPopularService] = useState([]);

  useEffect(() => {
    fetch("https://tranquoasis-server.vercel.app/api/v1/services")
      .then((res) => res.json())
      .then((data) => {
        setPopularService(data);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-12">
      <h1 className="text-5xl font-bold text-center mb-12">Popular Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {popularService?.slice(0, 4).map((service) => (
          <PopularServiceCard
            key={service._id}
            service={service}
          ></PopularServiceCard>
        ))}
      </div>

      <div className="flex justify-center my-6">
        <Link to="/services">
          <button className="btn btn-primary text-white">Show More</button>
        </Link>
      </div>
    </div>
  );
};

export default PopularServices;
