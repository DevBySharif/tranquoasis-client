import { useEffect, useState } from "react";

const Services = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5005/api/v1/popular-services")
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, []);
  return (
    <div>
      <h2>this all services</h2>
    </div>
  );
};

export default Services;
