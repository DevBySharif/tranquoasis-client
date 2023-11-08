import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";

const ServiceDetails = () => {
  const [services, setServices] = useState([]);
  const [foundService, setFoundService] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch("https://tranquoasis-server.vercel.app/api/v1/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    const findService = loading ? (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    ) : (
      services.find((service) => service._id === id)
    );
    setFoundService(findService);
  }, [id, services, loading]);

  return (
    <div className="max-w-7xl mx-auto">
      <DetailsCard foundService={foundService}></DetailsCard>
    </div>
  );
};

export default ServiceDetails;
