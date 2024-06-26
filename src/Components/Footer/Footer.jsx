import FooterLogo from "../../assets/logo.png";
import FooterPattern from "../../assets/Footer/FooterPattern1.jpg";
import {FooterLinks}  from "./FooterLinks";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaX,
} from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";

const BannerImg = {
  backgroundImage: `Url(${FooterPattern})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-10 pt-5">

          {/* Company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 text-white text-2xl">
              <img className="w-[100px]" src={FooterLogo} alt="" />
              DeBlack Market
            </h1>
            <p className="text-white">
              At DeBlack Market, we redefine value by providing a carefully
              chosen assortment of excellent, gently used products, including
              phones, office supplies, household appliances, computers, cars,
              and more. As an online retailer committed to quality, we place a
              high value on price without sacrificing style, making sure each
              item satisfies our exacting requirements before being delivered to
              your home.
            </p>
          </div>

          {/* Footer link */}
          <div className="grid grid-cols-2 sm:grid-cols-2 col-span-2 md:pl-10 text-white">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-semibold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.name}
                    >
                      <span>{link.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>
            
            {/* social links */}
            <div className="mt-4 ml-6 sm:ml-2">
              <div className="flex items-center gap-3 mt-6">
                <a className="text-3xl text-gray-200" href="#">
                  <FaFacebook />
                </a>
                <a className="text-3xl text-gray-200" href="#">
                  <FaInstagram />
                </a>
                <a className="text-3xl text-gray-200" href="#">
                  <FaLinkedin />
                </a>
                <a className="text-3xl text-gray-200" href="#">
                  <FaX />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>46 Community Road, Akoka Yaba, Lagos</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMobileAlt />
                  <p>+234-806-749-7822</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
