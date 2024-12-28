"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

type ScrollContextType = {
  activeSection: "header" | "target" | null;
  setActiveSection: (section: "header" | "target" | null) => void;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState<
    "header" | "target" | null
  >(null);

  return (
    <ScrollContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }
  return context;
};
