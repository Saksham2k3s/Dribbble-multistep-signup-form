import React from "react";
import DribbleLogo from "../Images/dribbble.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDribbble,
  faTwitter,
  faFacebook,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

import {
  ForDesigners,
  Brands,
  HireDesigners,
  Company,
  Directories,
  DesignAssets,
  DesignResource,
} from "../utils/FooterOptions";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
    <div className="w-full py-10 lg:py-20 px-5 lg:px-10 flex flex-col lg:flex-row gap-10 ">
      {/* First Column */}
      <div className="flex flex-col items-center lg:items-start">
        <img src={DribbleLogo} alt="Dribbble Logo" className="w-24" />
        <p className="mt-4 lg:mt-8 text-center lg:text-left">
          Dribbble is the world's leading community to share, grow, and get hired
        </p>
        <div className="flex gap-3 mt-5">
          <FontAwesomeIcon icon={faDribbble} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faPinterest} />
        </div>
      </div>
      {/* Second Column */}
      <div className="flex flex-col items-center lg:items-start">
        <div className="font-bold text-sm text-black mb-1 lg:mb-3">For Designers</div>
        <div className="text-center items-center lg:text-start lg:items-start" >
        <ul>
          {ForDesigners.map((option) => (
            <Link to={option.href} key={option.name} className="items-center">
              <li className="text-sm text-black mt-2 lg:mt-3">{option.name}</li>
            </Link>
          ))}
          
        </ul>
        </div>
      </div>
      {/* Third Column */}
      <div className="flex flex-col items-center lg:items-start">
        <div className="font-bold text-sm text-black mb-1 lg:mb-3">Hire Designers</div>
        <div className="text-center items-center lg:text-start lg:items-start" >
        <ul >
          {HireDesigners.map((option) => (
            <Link to={option.href} key={option.name}>
              <li className="text-sm text-black mt-2 lg:mt-3">{option.name}</li>
            </Link>
          ))}
        </ul>
        </div>
        <div className="font-bold text-sm text-black mt-10 lg:mt-3">Brands</div>
        <ul>
          {Brands.map((option) => (
            <Link to={option.href} key={option.name}>
              <li className="text-sm text-black mt-2 lg:mt-3">{option.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      {/* Fourth Column */}
      <div className="flex flex-col items-center lg:items-start">
        <div className="font-bold text-sm text-black mb-1 lg:mb-3 ">Company</div>
        <div className="text-center items-center lg:text-start lg:items-start" >
        <ul>
          {Company.map((option) => (
            <Link to={option.href} key={option.name}>
              <li className="text-sm text-black mt-2 lg:mt-3">{option.name}</li>
            </Link>
          ))}
        </ul>
        </div>
      </div>
      {/* Fifth Column */}
      <div className="flex flex-col items-center lg:items-start">
        <div className="font-bold text-sm text-black mb-1 lg:mb-3 ">Directory</div>
        <div className="text-center items-center lg:text-start lg:items-start" >
        <ul>
          {Directories.map((option) => (
            <Link to={option.href} key={option.name}>
              <li className="text-sm text-black mt-2 lg:mt-3">{option.name}</li>
            </Link>
          ))}
        </ul>
        </div>
        <div className="font-bold text-sm text-black mt-3 ">Design Asset</div>
        <div className="text-center items-center lg:text-start lg:items-start" >
        <ul>
          {DesignAssets.map((option) => (
            <Link to={option.href} key={option.name}>
              <li className="text-sm text-black mt-2 lg:mt-3">{option.name}</li>
            </Link>
          ))}
        </ul>
        </div>
      </div>
      {/* Sixth Column */}
      <div className="flex flex-col items-center lg:items-start">
        <div className="font-bold text-sm text-black mb-3">Design Resources</div>
        <div className="text-center items-center lg:text-start lg:items-start" >
        <ul>
          {DesignResource.map((option) => (
            <Link to={option.href} key={option.name}>
              <li className="text-sm text-black mt-2 lg:mt-3">{option.name}</li>
            </Link>
          ))}
        </ul>
        </div>
      </div>
    </div>
    <div className=" w-screen border top-1 h-auto lg:h-20 flex flex-col lg:flex-row justify-between align-middle mb-10 lg:mb-3 " >
        <div className=" w-full lg:w-1/2 text-center lg:text-start px-10 mt-7" >
          <div className="text-sm text-gray-500" >@2023 Dribbble. All right reserved</div>
        </div>
        <div className=" w-full lg:w-1/2 text-center lg:text-end  px-10 mt-3 lg:mt-7" >
          <div className="text-sm text-gray-500" ><span className=" text-black font-bold" >20,501,853</span> shots dribbbled <FontAwesomeIcon icon={faDribbble} className=" text-[#ea4b8b]" /> </div>
        </div>
    </div>
    </>
  );
}

export default Footer;
