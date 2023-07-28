import React, { useEffect, useState } from "react";

const ShineCursor: React.FC = () => {
  const [position, setPosition] = useState({ left: 0, top: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        left: e.clientX - 250,
        top: e.clientY - 250,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="shine-cursor-container"
      style={{
        left: position.left,
        top: position.top,
      }}
    >
      <div className="shine"></div>
    </div>
  );
};

export default ShineCursor;
