import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import ManageServiceCard from "./ManageServiceCard";

const ManageServices = () => {
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://tranquoasis-server.vercel.app/api/v1/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  const yourServices = services.filter(
    (service) => service.yourEmail === user?.email
  );
  console.log(yourServices);
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold text-center my-12">
        Manage Your Services
      </h1>
      <div className="space-y-5">
        {yourServices.map((yourService) => (
          <ManageServiceCard
            key={yourService._id}
            yourService={yourService}
            services={services}
            setServices={setServices}
          ></ManageServiceCard>
        ))}
      </div>
    </div>
  );
};

export default ManageServices;
