import React from "react";
import SliderCard from "./SliderCard";
import 'aos/dist/aos.css'; // Import the AOS styles
import AOS from 'aos';
import { useEffect } from "react";
import "../slider.css"
import { useRef } from "react";


const Slider = () => {
    const scrollContainerRef = useRef(null);
    useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Set the default animation duration
    });
  }, []);

function effect (){
    const scrollContainer = scrollContainerRef.current;
    let animationId;

    const scroll = () => {
      if (scrollContainer) {
        if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
          scrollContainer.scrollTo({ left: 0, behavior: 'auto' });
        } else {
          scrollContainer.scrollTo({ left: scrollContainer.scrollLeft + 1, behavior: 'smooth' });
        }
        animationId = requestAnimationFrame(scroll);
      }
    };

    animationId = requestAnimationFrame(scroll);
  };

  return (
    <div data-aos="fade-left" className="flex m-auto overflow-hidden w-auto">
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex space-x-10  p-6 " ref={scrollContainerRef} disableEqualOverflow>
          <SliderCard
            bgColor="bg-[#caf0f8]"
            title="You get a promotion at work"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            emoji="😃"
          />
          <SliderCard
            tilted
            bgColor="bg-[#fcf6bd]"
            text="text-black"
            title="You argue with a friend"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            emoji="😔"
          />
          <SliderCard
            bgColor="bg-[#f9dbbd]"
            title="You argue with a friend"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            emoji="😠"
          />
          <SliderCard
            bgColor="bg-[#ff8fa3]"
            title="You get a promotion at work"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            emoji="😳"
          />
          <SliderCard
            bgColor="bg-green-100"
            title="You get a promotion at work"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            emoji="🙂"
          />
          <SliderCard
            tilted
            bgColor="bg-rose-400"
            text="text-white"
            title="You get a promotion at work"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            emoji="😟"
          />
          <SliderCard
            bgColor="bg-red-100"
            title="You get a promotion at work"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            emoji="😑"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;