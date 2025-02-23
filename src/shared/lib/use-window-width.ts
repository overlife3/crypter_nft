import { useState, useEffect } from "react";

const subscribers = new Set<(width: number) => void>();

const observer = new ResizeObserver(() => {
  const width = window.innerWidth;
  subscribers.forEach((callback) => callback(width));
});

observer.observe(document.body);

export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    subscribers.add(setWidth);
    return () => {
      subscribers.delete(setWidth);
    };
  }, []);

  return width;
};
