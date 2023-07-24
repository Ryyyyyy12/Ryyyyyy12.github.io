import { useTheme } from "@mui/material/styles";
import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const pageHeight = window.innerHeight * 0.5;
    if (window.pageYOffset > pageHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-8">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer transform hover:scale-110 animate-bounce transition-opacity duration-300 opacity-100 ${
            theme.palette.mode === "dark" ? "text-white" : "text-black"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
