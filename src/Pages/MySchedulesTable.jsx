const MySchedulesTable = ({ service }) => {
  const { serviceName, date, price, userEmail } = service;
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
      <td className="px-6 py-4 text-right">
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </a>
      </td>
    </tr>
  );
};

export default MySchedulesTable;
