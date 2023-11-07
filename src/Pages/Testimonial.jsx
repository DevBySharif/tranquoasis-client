import { Carousel } from "flowbite-react";
import img from "../assets/testimoniyalBg.png";
const Testimonial = () => {
  return (
    <div
      className="w-full h-full bg-[#325343] lg:pt-52"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <figure className="max-w-screen-md mx-auto text-center lg:pr-36 lg:pb-20">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-green-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>

          <div>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
              <Carousel
                onSlideChange={(index) => console.log("onSlideChange()", index)}
              >
                <div className="h-full items-center justify-center   dark:text-white px-10">
                  <blockquote>
                    <p className="lg:text-4xl italic font-medium text-white dark:text-white">
                      "I can actually see progress in my mental health which is
                      something I haven't been able to say in 15 years and it's
                      thanks to her."
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img
                      className="w-6 h-6 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                      alt="profile picture"
                    />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                        Virginia Truglio
                      </cite>
                      <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                        LCSW, MSW
                      </cite>
                    </div>
                  </figcaption>
                </div>
                <div className="h-full items-center justify-center dark:text-white">
                  <blockquote>
                    <p className="lg:text-4xl italic font-medium text-white dark:text-white">
                      "Michelle listens and provides excellent guidance through
                      life's situations."
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img
                      className="w-6 h-6 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                      alt="profile picture"
                    />
                    <div className=" items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                        Michelle Wilkinson
                      </cite>
                      <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                        MA, LPC-S
                      </cite>
                    </div>
                  </figcaption>
                </div>
                <div className=" h-full items-center justify-center dark:text-white">
                  <blockquote>
                    <p className="lg:text-4xl italic font-medium text-white dark:text-white">
                      "Susan is amazing in her insights and conversational
                      approach. I am so glad and blessed to have found her and
                      started healing with her guidance."
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img
                      className="w-6 h-6 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                      alt="profile picture"
                    />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                        Susan Hargett
                      </cite>
                      <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                        LPC, NCC, YACEP
                      </cite>
                    </div>
                  </figcaption>
                </div>
              </Carousel>
            </div>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default Testimonial;
