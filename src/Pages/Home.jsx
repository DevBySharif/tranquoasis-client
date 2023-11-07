import Banner from "./Banner";
import LargestService from "./LargestService";
import PopularServices from "./PopularServices";
import Therapist from "./Therapist";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LargestService></LargestService>
      <PopularServices></PopularServices>
      <Therapist></Therapist>
    </div>
  );
};

export default Home;
