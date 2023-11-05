import { useLoaderData } from "react-router-dom";

const PopularServices = () => {
  const popularService = useLoaderData();
  console.log(popularService);
  return (
    <div>
      <h1>Popular Pervices</h1>
    </div>
  );
};

export default PopularServices;
