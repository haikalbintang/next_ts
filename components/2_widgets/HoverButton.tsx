import { useState, useEffect } from "react";

const HoverButton = () => {
  const [text, setText] = useState("Colek Saya");
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (hovered) {
      timeout = setTimeout(() => {
        setText("Kolaborasi");
      }, 1000);
    } else {
      setText("Colek Saya");
    }
    return () => clearTimeout(timeout);
  }, [hovered]);
  return (
    <button
      className="transition-all bg-yellow-500 text-white text-xl py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-opacity-50 hover:shadow-[0px_0px_15px_rgba(255,255,255,0.8),0px_0px_20px_rgba(255,255,255,0.6)]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {" "}
      {text}{" "}
    </button>
  );
};
export default HoverButton;
