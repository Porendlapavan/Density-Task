import React, { useState } from "react";
import JobCard from "./JobCard";

const JobsSlider = () => {
  return (
    <div  className="flex m=0 m-auto">
      <div className="flex">
        <div className="flex space-x-5  p-6">
          <JobCard className='w-1/3'
            role="Senior Full-Stack engineering"
            position="Full time position"
            location="Berlin or remote"
            salary="€65-85k, 0.5-1.50% equity share options"
          />
          <JobCard className='w-1/3'
            role="Senior Developer"
            position="Full time position"
            location="Berlin or remote"
            salary="€65-85k, 0.5-1.50% equity share options"
          />
          <JobCard className='w-1/3'
            role="Super star Intern"
            position="Full time position"
            location="Berlin or remote"
            salary="€65-85k, 0.5-1.50% equity share options"
          />
        </div>
      </div>
    </div>
  );
};

export default JobsSlider;
