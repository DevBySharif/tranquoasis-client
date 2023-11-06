import { useEffect, useState } from "react";

const MySchedules = () => {
  const [bookedServices, setBookedServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5005/api/v1/user/booked-service")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h1>this is my my schedules</h1>
    </div>
  );
};

export default MySchedules;
