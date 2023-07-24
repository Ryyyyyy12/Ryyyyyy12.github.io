import React, { useState, useEffect, useRef } from "react";

const ToolComponent = ({ tools }: any) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [toolsToDisplay, setToolsToDisplay] = useState<string[]>([]);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const containerWidth = container.offsetWidth;
        const toolMinWidth = 70; // Minimum width of each tool (adjust as needed)
        const maxTools = Math.floor(containerWidth / toolMinWidth);
        const displayedTools = tools.slice(0, maxTools);
        const isOverflowing = displayedTools.length < tools.length;

        setToolsToDisplay(displayedTools);
        setIsOverflowing(isOverflowing);
      }
    };

    handleResize(); // Initial calculation on mount

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [tools]);

  return (
    <div ref={containerRef} className="flex flex-wrap">
      {toolsToDisplay.map((tool, index) => (
        <span
          key={index}
          className="inline-block border border-black rounded-full font-thin px-2 py-1 text-xs text-gray-700 mr-1"
        >
          {tool}
        </span>
      ))}
      {isOverflowing && (
        <span className="inline-block border border-black rounded-full font-thin px-2 py-1 text-xs text-gray-700">
          ...
        </span>
      )}
    </div>
  );
};

export default ToolComponent;
