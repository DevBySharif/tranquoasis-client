import { Helmet } from "react-helmet";
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tranquoasis | Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    </div>
  );
};

export default Home;
