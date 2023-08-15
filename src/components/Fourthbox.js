// import Image from "next/image";
import React from "react";
import Slider from "./Slider";
import 'aos/dist/aos.css'; // Import the AOS styles
import AOS from 'aos';
// import angryGhost from "../assets/ghost-cute.gif";
import Motionpath from "./motionpath";

const Fourth = () => {

  return (
    <div>
      <div className="grid grid-cols-3 justify-between my-6">
        <div className=" p-10 py-30 font-bold text-4xl ">
          EQ beats IQ
        </div>
        <div className=" p-10 pb-20 text-gray-500 text-lg font-medium tracking-wide">
          {" "}
            People with high emotional
            intelligence (EQ) live more fulfilled
            lives. They tend to be happier and
            have healthier relationships.{" "}
        </div>
        <div className=" p-10 pb-20 text-gray-500 text-lg font-medium tracking-wide">
            They are more successful in their
            pursuits and make for inspiring
            leaders. According to science, they
            earn $29k a year
        </div>
      </div>
      <div>
        <div className="flex">
            <h1 data-aos="zoom-in-right" data-aos-duration="1500" className="text-4xl font-bold p-6">
                Does this sound familiar...
            </h1>
            <Motionpath />
        </div>
        <div className="mb-20">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Fourth;