"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gray-900">
      {/* Image Container */}
      <div className="relative h-full w-full">
        {/* Grayscale Image */}
        <Image
          src="/education/revou.png"
          alt="Sample"
          layout="fill"
          // objectFit="cover"
          className="w-28 h-28"
          priority
        />

        {/* Flashlight Effect */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent 100px, rgba(255, 255, 255, 0.8) 150px)`,
            mixBlendMode: "normal",
          }}
        ></div>
      </div>
    </div>
  );
}
