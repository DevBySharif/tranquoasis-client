import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://tranquoasis-server.vercel.app/api/v1/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  const filteredServices = services.filter((service) =>
    service.serviceName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div>
        <div className="max-w-7xl mx-auto my-12">
          <h1 className="text-5xl font-bold text-center mb-12">All Services</h1>
          <div className="mb-12">
            <form>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  placeholder="Search by Service Name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover-bg-green-700 dark:focus:ring-green-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {isShow
              ? filteredServices
                  .slice(0, 6)
                  .map((service) => (
                    <ServiceCard
                      key={service._id}
                      service={service}
                    ></ServiceCard>
                  ))
              : filteredServices.map((service) => (
                  <ServiceCard
                    key={service._id}
                    service={service}
                  ></ServiceCard>
                ))}
          </div>
          <div>
            {filteredServices.length > 6 && (
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
