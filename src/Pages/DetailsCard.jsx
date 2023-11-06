import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";

const DetailsCard = ({ foundService }) => {
  const { user } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);

  const {
    serviceName,
    description,
    photo,
    price,
    serviceArea,
    yourEmail,
    yourName,
  } = foundService;
  const handlePurchase = (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceName = form.serviceName.value;
    const yourEmail = form.yourEmail.value;
    const price = form.price.value;
    const date = form.date.value;
    const instruction = form.instruction.value;
    const photo = form.photo.value;
    const userEmail = form.userEmail.value;

    const PurchaseService = {
      serviceName,
      yourEmail,
      price,
      photo,
      userEmail,
      date,
      instruction,
    };

    fetch("http://localhost:5005/api/v1/user/booked-service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(PurchaseService),
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
    <div>
      <h1 className="text-5xl font-bold text-center my-12">{serviceName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        <div className="col-span-3">
          <h3 className="text-xl font-semibold mb-9">Service</h3>
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img src={photo} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{serviceName}</h2>
              <p>{description}</p>
              <p>Price:${price}</p>
              <div className="card-actions justify-end">
                <Button
                  className="btn btn-primary"
                  onClick={() => setOpenModal(true)}
                >
                  Book Now
                </Button>
                <Modal
                  show={openModal}
                  size="md"
                  popup
                  onClose={() => setOpenModal(false)}
                  //   initialFocus={emailInputRef}
                >
                  <Modal.Header />
                  <Modal.Body>
                    <form onSubmit={handlePurchase} className="space-y-6">
                      <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                        Book Your Service Now
                      </h3>
                      <div>
                        <div className="mb-2 block">
                          <Label value="Service Name" />
                        </div>
                        <TextInput
                          //   ref={emailInputRef}
                          name="serviceName"
                          defaultValue={serviceName}
                          disabled
                        />
                      </div>
                      <div>
                        <div className="mb-2 block">
                          <Label value="Service Image" />
                        </div>
                        <TextInput name="photo" defaultValue={photo} disabled />
                      </div>
                      <div>
                        <div className="mb-2 block">
                          <Label value="Provider Email" />
                        </div>
                        <TextInput
                          name="yourEmail"
                          defaultValue={yourEmail}
                          disabled
                        />
                      </div>
                      <div>
                        <div className="mb-2 block">
                          <Label value="User Email" />
                        </div>
                        <TextInput
                          name="userEmail"
                          defaultValue={user?.email}
                          disabled
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
                          disabled
                        />
                      </div>
                      <div>
                        <div className="mb-2 block">
                          <Label value="Booking Date" />
                        </div>
                        <TextInput name="date" type="date" required />
                      </div>
                      <div>
                        <div className="mb-2 block">
                          <Label value="Special instruction" />
                        </div>
                        <TextInput
                          type="text"
                          name="instruction"
                          placeholder="Write your instruction"
                          required
                        />
                      </div>

                      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        <button
                          type="submit"
                          className="btn btn-primary text-black-700 hover:underline dark:text-white"
                        >
                          Purchase this Service
                        </button>
                      </div>
                    </form>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <h3 className="text-xl font-semibold mb-9">Provider</h3>
          <div className="avatar flex justify-center">
            <div className="w-24 rounded border border-green-500">
              <img src={user?.photoURL} />
            </div>
          </div>
          <div className="text-center text-3xl font-medium">
            <p>Name: {yourName}</p>
            <p>Email: {yourEmail}</p>
            <p>Area: {serviceArea}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
