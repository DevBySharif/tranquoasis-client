import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import Swal from "sweetalert2";

const ManageServiceCard = ({ yourService, services, setServices }) => {
  const {
    serviceName,
    photo,
    price,
    description,
    _id,
    yourEmail,
    yourName,
    serviceArea,
  } = yourService;
  const [openModal, setOpenModal] = useState(false);

  const handleUpdateService = (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceName = form.serviceName.value;
    const yourName = form.yourName.value;
    const yourEmail = form.yourEmail.value;
    const price = form.price.value;
    const serviceArea = form.serviceArea.value;
    const description = form.description.value;
    const photo = form.photo.value;

    const updateService = {
      serviceName,
      yourName,
      yourEmail,
      price,
      serviceArea,
      description,
      photo,
    };

    fetch(`https://tranquoasis-server.vercel.app/api/v1/services/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Service Updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //
        fetch(`https://tranquoasis-server.vercel.app/api/v1/services/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Service has been deleted.",
                "success"
              );
              const remaining = services.filter((data) => data._id !== _id);
              setServices(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} className="w-96" alt="Album" />
        </figure>

        <div className="card-body ">
          <h2 className="card-title">{serviceName}</h2>
          <p>{description}</p>
          <p>Price:${price}</p>
        </div>
        <div className="p-5">
          <div className="flex lg:flex-col gap-y-28 justify-evenly items-center">
            <Button
              className="btn btn-active btn-secondary"
              onClick={() => setOpenModal(true)}
            >
              Update
            </Button>
            <Modal
              show={openModal}
              size="md"
              popup
              onClose={() => setOpenModal(false)}
            >
              <Modal.Header />
              <Modal.Body>
                <form onSubmit={handleUpdateService} className="space-y-6">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Update Your Service
                  </h3>
                  <div>
                    <div className="mb-2 block">
                      <Label value="Service Name" />
                    </div>
                    <TextInput
                      name="serviceName"
                      defaultValue={serviceName}
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label value="Service Image" />
                    </div>
                    <TextInput name="photo" defaultValue={photo} />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label value="Provider Email" />
                    </div>
                    <TextInput
                      name="yourEmail"
                      defaultValue={yourEmail}
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label value="Your Name" />
                    </div>
                    <TextInput
                      name="yourName"
                      defaultValue={yourName}
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label value="Price(USD)" />
                    </div>
                    <TextInput
                      name="price"
                      type="text"
                      defaultValue={price}
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label value="Service Area" />
                    </div>
                    <TextInput
                      name="serviceArea"
                      defaultValue={serviceArea}
                      type="text"
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label value="Description" />
                    </div>
                    <TextInput
                      type="text"
                      name="description"
                      defaultValue={description}
                      placeholder="Description"
                      required
                    />
                  </div>

                  <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    <button
                      type="submit"
                      className="btn btn-primary text-black-700 hover:underline dark:text-white"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </Modal.Body>
            </Modal>

            <button
              onClick={handleDelete}
              className="btn btn-active btn-accent"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageServiceCard;
