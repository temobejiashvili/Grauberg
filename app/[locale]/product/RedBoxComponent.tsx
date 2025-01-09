"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useScrollContext } from "../../../components/context/ScrollContext";

const RedBoxComponent = () => {
  const { setActiveSection } = useScrollContext();
  const { ref: targetRef, inView: isTargetInView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (isTargetInView) {
      setActiveSection("target");
    }
  }, [isTargetInView, setActiveSection]);

  return (
    <div className="h-[724px] flex items-start max-1100:h-[414px]">
      <div
        className="h-[60%] w-[537px] bg-primary 
          rounded-r-[40px]
          max-1100:w-full
          max-1100:rounded-r-none
          max-1100:h-[414px]"
        ref={targetRef}
      />
    </div>
  );
};

export default RedBoxComponent;
