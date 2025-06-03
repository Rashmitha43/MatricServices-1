import React, { useEffect, useRef } from "react";
import "./Arrow.css";

const CurvedArrowLeftToRight = ({ flip = false, color = "#4A4A4A" }) => {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    // Function to reset and restart the animation
    const triggerAnimation = () => {
      path.style.transition = "none";
      path.style.strokeDashoffset = path.getTotalLength();
      // Trigger a reflow to restart the animation
      void path.getBoundingClientRect();
      path.style.transition = "stroke-dashoffset 1.5s ease-in-out";
      path.style.strokeDashoffset = "0";
    };

    // Create Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerAnimation();
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% visible
      }
    );

    observer.observe(path);

    // Initial setup: set strokeDashoffset to total length (hidden)
    path.style.strokeDasharray = path.getTotalLength();
    path.style.strokeDashoffset = path.getTotalLength();

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={`arrow ${flip ? "flip" : ""}`}
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="10"
          refX="5"
          refY="5"
          orient="auto"
        >
          <polygon points="0 0, 10 5, 0 10" fill={color} />
        </marker>
      </defs>
      <path
        ref={pathRef}
        d="M10,40 Q50,10 90,90"
        stroke={color}
        strokeWidth="3"
        fill="none"
        markerEnd="url(#arrowhead)"
      />
    </svg>
  );
};

export default CurvedArrowLeftToRight;
