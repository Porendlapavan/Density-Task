import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin"; // Import MotionPathPlugin
import { useRef } from "react";
import Packmon from '../Images/pack-man_motion.png'
import VisibleDiv from './Visibile'

gsap.registerPlugin(MotionPathPlugin); // Register the plugin

function MotionPathAnimation() {

  const elementRef = useRef(null);
  const  image=useRef(null);


function annimate(){
  const imageelement=image.current.getBoundingClientRect();
  const element = elementRef.current;
      if(imageelement.left>(window.innerWidth)*1/2){
        gsap.to(element, {
        duration: 2, // Animation duration
        motionPath: {
          path: "M500 50 Q300 0 100 50", // SVG path data for the motion path
          align: "self", // Align the element with the path
          autoRotate: false, // Auto-rotate the element based on the path's curvature
        },
      });
      }

  }
  return (
    <div>
      <div ref={elementRef} style={{color:"black"}}><img ref={image} src={Packmon} style={{width:"50px",marginLeft:"430px",height:"50px"}}/></div>
      <VisibleDiv onVisible={annimate}/>
    </div>
  );
}

export default MotionPathAnimation;
