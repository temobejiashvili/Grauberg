"use client";
import { createContext, useContext, useState } from "react";

const ScrollContext = createContext<{
  isScrollLocked: boolean;
  lockScroll: () => void;
  unlockScroll: () => void;
}>({
  isScrollLocked: false,
  lockScroll: () => {},
  unlockScroll: () => {},
});

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [isScrollLocked, setScrollLocked] = useState(false);

  const lockScroll = () => {
    document.body.style.overflow = "hidden"; // Lock scroll
    setScrollLocked(true);
  };

  const unlockScroll = () => {
    document.body.style.overflow = ""; // Unlock scroll
    setScrollLocked(false);
  };

  return (
    <ScrollContext.Provider
      value={{ isScrollLocked, lockScroll, unlockScroll }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => useContext(ScrollContext);
