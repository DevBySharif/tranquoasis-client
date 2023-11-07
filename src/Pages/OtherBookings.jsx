import { useEffect, useRef, useState } from "react";

const OtherBookings = ({ service, bookedServices, setBookedServices }) => {
  const [selectedOption, setSelectedOption] = useState("Pending");
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { serviceName, date, price, userEmail, _id, status } = service;

  useEffect(() => {
    if (status === "In Process" || status === "Completed") {
      setSelectedOption(status);
    }
  }, [status]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setMenuOpen(false);
    handleInProcess(_id, option);
    handleCompleted(_id, option);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleInProcess = (id) => {
    fetch(`http://localhost:5005/api/v1/user/booked-service/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "In Process" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          const remaining = bookedServices.filter((serve) => serve._id !== id);
          const updated = bookedServices.find((serve) => serve._id === id);
          updated.status = "In Process";
          const newBooking = [updated, ...remaining];
          setBookedServices(newBooking);
        }
      });
  };
  const handleCompleted = (id) => {
    fetch(`http://localhost:5005/api/v1/user/booked-service/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Completed" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          const remaining = bookedServices.filter((serve) => serve._id !== id);
          const updated = bookedServices.find((serve) => serve._id === id);
          updated.status = "Completed";
          const newBooking = [updated, ...remaining];
          setBookedServices(newBooking);
        }
      });
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {serviceName}
      </th>
      <td className="px-6 py-4">{userEmail}</td>
      <td className="px-6 py-4">{date}</td>
      <td className="px-6 py-4">{price}</td>
      <td className="text-right flex justify-end pr-3">
        <div className="relative inline-block text-left" ref={dropdownRef}>
          <div>
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-blue-200 active:bg-gray-100"
              onClick={toggleMenu}
            >
              {selectedOption}
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 7.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {menuOpen && (
            <div
              className="absolute mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
              role="menu"
              aria-orientation="vertical"
              style={{
                top: "auto",
                bottom: "100%",
                transform: "translateY(2px)",
              }}
            >
              <div
                className="py-1"
                role="menuitem"
                onClick={() => handleOptionChange("Pending")}
              >
                <p className="text-gray-900 block px-4 py-2 text-sm">Pending</p>
              </div>
              <div
                className="py-1"
                role="menuitem"
                onClick={() => handleOptionChange("In Process")}
              >
                <p className="text-gray-900 block px-4 py-2 text-sm">
                  In Process
                </p>
              </div>
              <div
                className="py-1"
                role="menuitem"
                onClick={() => handleOptionChange("Completed")}
              >
                <p className="text-gray-900 block px-4 py-2 text-sm">
                  Completed
                </p>
              </div>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};

export default OtherBookings;
