import React from "react";
import Logo from "../../Utils/Assets/Svg/Dashboard_logo.svg";
import FooterImage from "../../Utils/Assets/Svg/class 1.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import slack from "../../Utils/Assets/Svg/slack-.png";
import linkedin from "../../Utils/Assets/Svg/linkedin.png";
import instagram from "../../Utils/Assets/Svg/instagram.png";
import meta from "../../Utils/Assets/Svg/meta.png";
function Footer() {
  return (
    <div id="contactus" className="relative flex w-screen">
      <img
        className="object-cover w-screen md:h-[600px] h-[950px] "
        src={FooterImage}
      />
      <div className=" absolute w-screen">
        <div className="flex relative items-center justify-center">
          <div className=" w-[80%] flex flex-col relative">
            <div className=" mt-10">
              <img src={Logo} />
            </div>
            <div className=" md:justify-between md:flex-row flex-col items-center flex  mt-10 md-6">
              <div className=" text-xl self-center mb-6">
                <ul className=" text-white flex flex-col gap-4">
                  <li className=" flex items-center gap-4 ">
                    <p className=" bg-black/50 p-3 rounded-full ">
                      <FaLocationDot color="#ffffff" size={20} />
                    </p>
                    <p>New Delhi</p>
                  </li>
                  <li className=" flex items-center gap-4 ">
                    <p className=" bg-black/50 p-3 rounded-full ">
                      <FaPhone color="#ffffff" size={20} />
                    </p>
                    <p>+ 91 965012585</p>
                  </li>
                  <li className=" flex items-center gap-4 ">
                    <p className=" bg-black/50 p-3 rounded-full ">
                      <IoMdMail color="#ffffff" size={20} />
                    </p>
                    <p>Brainace@gamil.com</p>
                  </li>
                </ul>
              </div>

              <div className=" mb-6">
                <ul className=" text-xl text-white flex flex-col gap-3">
                  <li>About</li>
                  <li>Careers</li>
                  <li>Privacy Policies</li>
                  <li>Terms & Conditions</li>
                </ul>
              </div>

              <div className="flex items-center justify-center">
                {/* <GoogleMap /> */}
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=27.141611,78.075861"
                  width="350"
                  height="250"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="flex justify-center items-center mt-10 flex-col">
              <div>
                <p className=" md:text-xl text-white"> Follow us</p>
              </div>
              <div className=" flex w-10 flex-row my-2 items-center justify-center gap-2">
                <img src={meta} />
                <img src={slack} />
                <img src={instagram} />
                <img src={linkedin} />
              </div>
              <p className=" text-sm text-gray-300">
                Copyright © 2024-25 Brainace
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
