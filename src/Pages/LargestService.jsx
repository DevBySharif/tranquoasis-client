import { Typewriter } from "react-simple-typewriter";

const LargestService = () => {
  const handleType = () => {};

  const handleDone = () => {};
  return (
    <div className="bg-[#fffcf6]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-7xl mx-auto ">
        <div>
          <h1 className="text-6xl">
            The world&apos;s largest therapy service. <br />
            <span style={{ color: "green", fontWeight: "bold" }}>
              <Typewriter
                words={["100% online.", "Time Saving.", "Trusted."]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </span>
          </h1>
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl text-[#397a4a] font-bold">
            3 4 6 , 3 9 0 , 3 7 3
          </h1>
          <h3 className="text-xl">Messages, chat, phone, video sessions</h3>
          <hr />
          <h1 className="text-4xl text-[#397a4a] font-bold">3 4 , 3 6 8</h1>
          <h3 className="text-xl">Credentialled therapists ready to help</h3>
          <hr />
          <h1 className="text-4xl text-[#397a4a] font-bold">
            4 , 3 3 4 , 6 5 3
          </h1>
          <h3 className="text-xl">People got help</h3>
        </div>
      </div>
    </div>
  );
};

export default LargestService;
