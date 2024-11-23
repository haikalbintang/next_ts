"use client";

import Education from "@/components/3_modules/Education";
import Hero from "@/components/3_modules/Hero";
import Project from "@/components/3_modules/Project";
import TechStack from "@/components/3_modules/TechStack";
import Main from "@/components/4_templates/Main";
import { useEffect, useState } from "react";
import classNames from "classnames";

export default function TestFlashLight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [flashlightSize, setFlashlightSize] = useState(300);

  const MAX_WIDTH = 1280;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mainContainer = document.querySelector("main"); // Assuming 'Main' is a <main> element

      if (mainContainer) {
        const rect = mainContainer.getBoundingClientRect(); // Get the container's position relative to the viewport
        const xAxis = e.clientX - rect.left; // Mouse X relative to the container
        const yAxis = e.clientY - rect.top; // Mouse Y relative to the container

        setMousePosition({
          x: xAxis, // No need to add window.scrollX as rect.left includes scrolling
          y: yAxis, // No need to add window.scrollY as rect.top includes scrolling
        });
      }
    };

    // Listen for mouse movement
    window.addEventListener("mousemove", handleMouseMove);

    // Handle window resize to adjust flashlight size
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      // Adjust flashlight size based on the window width
      if (screenWidth > MAX_WIDTH) {
        // Calculate size proportionately to the window size
        const newSize = (screenWidth / MAX_WIDTH) * 300; // 200px is the base size
        setFlashlightSize(newSize);
      } else {
        // Default flashlight size if screen width is smaller than MAX_WIDTH
        setFlashlightSize(300);
      }
    };

    // Attach resize event listener
    window.addEventListener("resize", handleResize);

    // Initial call to set the flashlight size
    handleResize();

    // Clean up event listeners
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    // <div className="flex items-center justify-center min-h-screen bg-gray-900">
    //   <div className="relative w-full max-w-screen-xl overflow-hidden">
    <>
      <div className="relative w-full overflow-hidden">
        {/* Grayscale Content */}
        <div
          className={classNames(
            "absolute inset-0 z-10 filter grayscale pointer-events-none"
          )}
          style={{
            maskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent ${flashlightSize}px, rgba(0, 0, 0, 0.9) ${flashlightSize}px)`,
            WebkitMaskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent ${flashlightSize}px, rgba(0, 0, 0, 0.9) ${flashlightSize}px)`,
          }}
        >
          <Main>
            <Hero />
            <Education />
            <TechStack />
            <Project />
          </Main>
        </div>

        {/* Colored Content */}
        <div className="relative z-0">
          <Main>
            <Hero />
            <Education />
            <TechStack />
            <Project />
          </Main>
        </div>
      </div>
      {/* </div> */}
    </>
    //   </div>
    // </div>
  );
}
