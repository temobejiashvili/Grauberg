"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { usePathname } from "next/navigation";

interface WindowDimensionsProviderProps {
  children: ReactNode;
}

const WindowDimensionsContext = createContext({
  windowWidth: 0,
  is900: false,
  pathname: "",
});

export const useWindowDimensions = () => useContext(WindowDimensionsContext);

export const WindowDimensionsProvider: React.FC<
  WindowDimensionsProviderProps
> = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // Set initial size at mount
    window.addEventListener("resize", handleResize); // Subscribe to window resize events

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const is900 = windowWidth <= 900;

  return (
    <WindowDimensionsContext.Provider value={{ windowWidth, is900, pathname }}>
      {children}
    </WindowDimensionsContext.Provider>
  );
};
