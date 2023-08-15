import React, { useState } from "react";
import JobCard from "./JobCard";

const JobsSlider = () => {
  return (
    <div data-aos="fade-left" data-aos-duration="1200" className="flex m-auto   w-auto">
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex space-x-5  p-6">
          <JobCard
            role="Senior Full-Stack engineering"
            position="Full time position"
            location="Berlin or remote"
            salary="5lpa"
          />
          <JobCard
            role="Senior Developer"
            position="Full time position"
            location="Berlin or remote"
            salary="5lpa"
          />
          <JobCard
            role="Super star Intern"
            position="Full time position"
            location="Berlin or remote"
            salary="5lpa"
          />
        </div>
      </div>
    </div>
  );
};

export default JobsSlider;
