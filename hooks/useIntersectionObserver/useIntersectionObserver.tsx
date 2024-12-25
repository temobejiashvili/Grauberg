"use client";

import { useEffect, useState, useRef } from "react";

export const useIntersectionObserver = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    const currentRef = ref.current; // Prevent null issues during cleanup
    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, [options]);

  return { ref, isVisible };
};
