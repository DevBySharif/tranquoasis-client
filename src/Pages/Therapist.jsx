import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Therapist = () => {
  return (
    <div className="bg-[#f7f0e6]  rounded-tl-[200px]">
      <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto ">
        <div>
          <span className="block mb-4 text-xs md:text-sm text-green-500 font-medium">
            Better every day
          </span>
          <h3 className="text-4xl md:text-4xl font-semibold">
            Professional and credentialled therapists who you can trust
          </h3>
          <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
            Tap into the world's largest network of credentialled and
            experienced therapists who can help you with a range of issues
            including depression, anxiety, relationships, trauma, grief, and
            more. With our therapists, you get the same professionalism and
            quality you would expect from an in-office therapist, but with the
            ability to communicate when and how you want.
          </p>
          <button className="bg-green-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-green-600 active:scale-95">
            Get Matched To A Therapist
          </button>
        </div>
        <ShuffleGrid />
      </section>
    </div>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://i.ibb.co/S3Y0TdB/img-1.png",
  },
  {
    id: 2,
    src: "https://i.ibb.co/fdkJGGm/img-2.png",
  },
  {
    id: 3,
    src: "https://i.ibb.co/k44mgdd/img-3.png",
  },
  {
    id: 4,
    src: "https://i.ibb.co/K5vNNhD/img-4.png",
  },
  {
    id: 5,
    src: "https://i.ibb.co/dMTp7d3/img-5.png",
  },
  {
    id: 6,
    src: "https://i.ibb.co/G7J0sP1/img-9.png",
  },
  {
    id: 7,
    src: "https://i.ibb.co/pJYz41W/img-10.png",
  },
  {
    id: 8,
    src: "https://i.ibb.co/G7J0sP1/img-9.png",
  },
  {
    id: 9,
    src: "https://i.ibb.co/k44mgdd/img-3.png",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-3 grid-rows-3 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Therapist;
