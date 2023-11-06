import { useContext } from "react";
import toast from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const AddService = () => {
  const { user } = useContext(AuthContext);
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceName = form.serviceName.value;
    const yourName = form.yourName.value;
    const yourEmail = form.yourEmail.value;
    const price = form.price.value;
    const serviceArea = form.serviceArea.value;
    const description = form.description.value;
    const photo = form.photo.value;

    const newService = {
      serviceName,
      yourName,
      yourEmail,
      price,
      serviceArea,
      description,
      photo,
    };

    fetch("http://localhost:5005/api/v1/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Service Added Successfully");
        }
      });
  };
  return (
    <div className="p-24">
      <Link to="/home">
        <button className="flex justify-center gap-2 items-center bg-green-500 px-4 py-3 mb-4 rounded-lg text-white font-semibold">
          <FaArrowLeft></FaArrowLeft> Back to Home
        </button>
      </Link>
      <h2 className="text-3xl font-extrabold text-center">Add a New Service</h2>
      <p className="text-center py-3">
        Fill in the details below to add a new service
      </p>
      <form onSubmit={handleAddService}>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Service Name</span>
            </label>
            <label>
              <input
                type="text"
                name="serviceName"
                placeholder="Service Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Your name</span>
            </label>
            <label>
              <input
                type="text"
                name="yourName"
                defaultValue={user?.displayName}
                className="input input-bordered w-full"
                disabled
              />
            </label>
          </div>
        </div>

        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Your email</span>
            </label>
            <label>
              <input
                type="text"
                name="yourEmail"
                defaultValue={user?.email}
                className="input input-bordered w-full"
                disabled
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label>
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Service Area</span>
            </label>
            <label>
              <input
                type="text"
                name="serviceArea"
                placeholder="Service Area"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label>
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Add Service"
          className="btn-block bg-green-500 py-3 rounded-lg text-white font-bold"
        />
      </form>
    </div>
  );
};

export default AddService;
