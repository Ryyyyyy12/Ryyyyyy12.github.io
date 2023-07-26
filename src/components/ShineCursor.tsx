import React, { useEffect, useState } from "react";

const ShineCursor = () => {
  const [position, setPosition] = useState({ left: 0, top: 0 });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setPosition({
        left: e.pageX - 250,
        top: e.pageY - 250,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="shine"
      style={{
        left: position.left,
        top: position.top,
        zIndex: 0,
      }}
    ></div>
  );
};

export default ShineCursor;
