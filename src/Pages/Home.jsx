import Banner from "./Banner";
import LargestService from "./LargestService";
import PopularServices from "./PopularServices";
import Testimonial from "./Testimonial";
import Therapist from "./Therapist";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LargestService></LargestService>
      <PopularServices></PopularServices>
      <Therapist></Therapist>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
