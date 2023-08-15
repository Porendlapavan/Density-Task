import zIndex from '@mui/material/styles/zIndex';
import React, { useEffect, useRef } from 'react';

const VisibleDiv = ({ onVisible }) => {
  const targetRef = useRef(null);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Call the provided function when the target div becomes visible
        onVisible();

    }
    });
  };

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.5, // The ratio of intersection to trigger the callback
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div ref={targetRef} style={{  background: 'lightgray',opacity:"0"}}>
      This is the target div.
    </div>
  );
};

export default VisibleDiv;
