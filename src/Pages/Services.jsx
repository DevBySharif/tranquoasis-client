import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5005/api/v1/popular-services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  console.log(services);
  return (
    <div>
      <div>
        <div className="max-w-7xl mx-auto my-12">
          <h1 className="text-5xl font-bold text-center mb-12">All Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {isShow
              ? services
                  ?.slice(0, 6)
                  .map((service) => (
                    <ServiceCard
                      key={service._id}
                      service={service}
                    ></ServiceCard>
                  ))
              : services?.map((service) => (
                  <ServiceCard
                    key={service._id}
                    service={service}
                  ></ServiceCard>
                ))}
          </div>
          <div>
            {services.length > 6 && (
              <button
                onClick={() => setIsShow(!isShow)}
                className="px-5 py-3 bg-green-500 text-lg text-white font-bold block mx-auto rounded-md"
              >
                {isShow ? "See less" : "See more"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
