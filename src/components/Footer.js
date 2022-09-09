import React from "react";
import polygon1 from "../assets/Polygon 1.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import dribble from "../assets/dribbble.png";
import payment from "../assets/icons_payment 1.png"

const Footer = () => {
  return (
    <footer>
        <div className="mx-44 flex justify-evenly mt-20">
        <div className="mr-9">
        <div className="flex items-center">
          <img className="w-4 h-4" src={polygon1} alt="" />
          <p className="text-2xl">LOGO</p>
          <img className="w-4 h-4" src={polygon1} alt="" />
        </div>
        <div className="text-sm mt-7 w-80 h-20 text-justify font-sans">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          cum odio esse suscipit alias libero ullam harum ea asperiores
          obcaecati?
        </div>
        <div className="flex mt-8">
          <img className="mr-4" src={facebook} alt="" />
          <img className="mr-4" src={twitter} alt="" />
          <img className="mr-4" src={linkedin} alt="" />
          <img className="mr-4" src={dribble} alt="" />
        </div>
      </div>
      <div className="mr-24">
        <h2 className="text-base font-medium mb-6">CALALOG</h2>
        <div className="text-sm font-sans font-normal">
          <p className="mb-3">Necklaces</p>
          <p className="mb-3">Hoddies</p>
          <p className="mb-3">Jewelry Box</p>
          <p className="mb-3">T-shirt</p>
          <p>Jacket</p>
        </div>
      </div>
      <div className="mr-24">
        <h2 className="text-base font-medium mb-6">ABOUT US</h2>
        <div className="text-sm font-sans font-normal">
          <p className="mb-3">Our Producers</p>
          <p className="mb-3">Sitemap</p>
          <p className="mb-3">FAQ</p>
          <p className="mb-3">About Us</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
      <div>
        <h2 className="text-base font-medium mb-6">CUSTOMER SERVICES</h2>
        <div className="text-sm font-sans font-normal">
          <p className="mb-3">Contact Us</p>
          <p className="mb-3">Track your Order</p>
          <p className="mb-3">Product Care & Repair</p>
          <p className="mb-3">Book An Appointment</p>
          <p>Shipping & Returns</p>
        </div>
      </div>
        </div>
   <div className="h-12 flex items-center justify-evenly mt-20" style={{background: "#1E2832"}}>
      <p className="text-white text-sm font-medium">&copy; 2022, Inc.</p>
      <div>
        <img src={payment} alt="" />
      </div>
   </div>
    </footer>
  );
};

export default Footer;
