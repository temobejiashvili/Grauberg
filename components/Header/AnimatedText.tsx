import React, { Component, useEffect, useState } from "react";

const AnimatedTextInvisibleBorder = (props) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true); // Trigger the animation
    }, props.time); // Delay before the animation starts

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-border-container">
      <h1
        className={`text-center text-[56px] font-bold leading-[66px] h1 text-[#f5f5f5] z-[2] ${
          showText ? "fade-in-text" : ""
        }`}
      >
        {props.data}
      </h1>
    </div>
  );
};

export default AnimatedTextInvisibleBorder;
