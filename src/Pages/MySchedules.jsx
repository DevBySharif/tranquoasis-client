import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MySchedulesTable from "./MySchedulesTable";

const MySchedules = () => {
  const { user } = useContext(AuthContext);

  const [bookedServices, setBookedServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5005/api/v1/user/booked-service")
      .then((res) => res.json())
      .then((data) => {
        setBookedServices(data);
      });
  }, []);
  const findBooking = bookedServices.filter(
    (bookedService) => bookedService.userEmail === user?.email
  );
  console.log(findBooking);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-12">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            My Bookings
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              Browse a list of Tranquoasis service designed to help your mind
              and soul, stay organized, get answers, keep in touch, be happy,
              and more.
            </p>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Service name
              </th>
              <th scope="col" className="px-6 py-3">
                Booked By
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {findBooking.map((service) => (
              <MySchedulesTable
                key={service._id}
                service={service}
              ></MySchedulesTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySchedules;
