"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface VisibilityContextProps {
  isVisible: boolean;
  ref: React.RefObject<HTMLDivElement>;
}

const VisibilityContext = createContext<VisibilityContextProps | undefined>(
  undefined
);

export const VisibilityProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      {
        threshold: 0.5,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <VisibilityContext.Provider value={{ isVisible, ref: cardRef }}>
      {children}
    </VisibilityContext.Provider>
  );
};

export const useVisibility = () => {
  const context = useContext(VisibilityContext);
  if (!context) {
    throw new Error("useVisibility must be used within a VisibilityProvider");
  }
  return context;
};
