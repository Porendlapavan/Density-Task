
import React from "react";
import sign from '../Images/sign.jpg'

export default function Test() {
  return (
    <div className="flex items-center flex-col p-20 py-0 my-16 gap-2">
      <p className="mb-0 text-lg">We take privacy seriously</p>
      <p className="mt-0 text-4xl font-black">Before you get started</p>
      <p data-aos="fade-up" data-aos-duration="1500" className="text-bold text-xl mt-5 text-center">
        &quot;We won&apos;t share your answers with anyone (and won&apos;t ever tell <br />
        you which friends said what about you&quot;
      </p>
      <p data-aos="fade-up" data-aos-duration="1500" className="py-6 flex text-xl">
        With love, <img className="w-14 mx-2" src={sign} alt="sign" />
      </p>
      <div data-aos="zoom-in" data-aos-duration="1500" className="flex flex-col items-center space-y-4">
        <button data-aos="zoom-in" data-aos-duration="1500" className='buttons'>Start test</button>
        <p data-aos="fade-in" data-aos-duration="1500" className="text-sm text-gray-500">
          Take only 5 minutes
        </p>
      </div>
    </div>
  );
};

