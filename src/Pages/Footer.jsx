import { Footer as Foot } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import logo from "../assets/Tranquoasis.svg";
const Footer = () => {
  return (
    <Foot container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Foot.Brand src={logo} className="h-[100px]" alt="Logo" />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Foot.Title title="about" />
              <Foot.LinkGroup col>
                <Foot.Link href="#">Tranquoasis</Foot.Link>
                <Foot.Link href="#">Services</Foot.Link>
              </Foot.LinkGroup>
            </div>
            <div>
              <Foot.Title title="Follow us" />
              <Foot.LinkGroup col>
                <Foot.Link href="#">Github</Foot.Link>
                <Foot.Link href="#">Discord</Foot.Link>
              </Foot.LinkGroup>
            </div>
            <div>
              <Foot.Title title="Legal" />
              <Foot.LinkGroup col>
                <Foot.Link href="#">Privacy Policy</Foot.Link>
                <Foot.Link href="#">Terms &amp; Conditions</Foot.Link>
              </Foot.LinkGroup>
            </div>
          </div>
        </div>
        <Foot.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Foot.Copyright href="#" by="Sharif Obaidullah™" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Foot.Icon href="#" icon={BsFacebook} />
            <Foot.Icon href="#" icon={BsInstagram} />
            <Foot.Icon href="#" icon={BsTwitter} />
            <Foot.Icon href="#" icon={BsGithub} />
            <Foot.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Foot>
  );
};

export default Footer;
