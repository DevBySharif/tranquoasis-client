import coupleImg from "../assets/Banner-card/couples_default.png";
import individualImg from "../assets/Banner-card/individual_movement.png";
import teenImg from "../assets/Banner-card/teen_default.png";
import banner from "../assets/wave.svg";
const Banner = () => {
  return (
    <div>
      <div className="bg-[#325343] lg:h-[50vh]">
        <div className="max-w-7xl mx-auto space-y-8">
          <h1 className="text-white text-center lg:text-5xl">
            You deserve to be happy.
          </h1>
          <h2 className="lg:text-xl text-center text-white">
            What type of therapy are you looking for?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-between justify-items-center gap-3">
            <div className="lg:w-96 lg:h-72 md:w-48 md:h-36  h-16 w-full relative bg-[#367547] rounded-lg hover:border border-white cursor-pointer">
              <img
                src={individualImg}
                alt="Background"
                className="object-cover w-full h-full absolute rounded-lg"
              />
              <div className="absolute inset-0 flex flex-col justify-start  text-left text-white  lg:p-4 md:p-2 p-1">
                <h2 className="lg:text-3xl">Indivitual</h2>
                <p className="mt-2">For Yourself</p>
              </div>
            </div>
            <div className="lg:w-96 lg:h-72 md:w-48 md:h-36 h-16 w-full relative bg-[#447676] rounded-lg hover:border border-white cursor-pointer">
              <img
                src={coupleImg}
                alt="Background"
                className="object-cover w-full h-full absolute rounded-lg"
              />
              <div className="absolute inset-0 flex flex-col justify-start  text-left text-white lg:p-4 md:p-2 p-1">
                <h2 className="lg:text-3xl">Couple</h2>
                <p className="mt-2">For me and my partner</p>
              </div>
            </div>
            <div className="lg:w-96 lg:h-72 md:w-48 md:h-36 h-16 w-full relative bg-[#a55c00] rounded-lg hover:border border-white cursor-pointer">
              <img
                src={teenImg}
                alt="Background"
                className="object-cover w-full h-full absolute rounded-lg"
              />
              <div className="absolute inset-0 flex flex-col justify-start  text-left text-white  lg:p-4 md:p-2 p-1">
                <h2 className="lg:text-3xl">Teen</h2>
                <p className="mt-2">For my child</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={banner} alt="" />
    </div>
  );
};

export default Banner;
