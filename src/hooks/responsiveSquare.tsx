import { useEffect, useState } from 'react';

export function useResponsiveSquare(percentageOfScreen: number) {
  const [dimension, setDimension] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      const minDimension = Math.min(window.innerHeight, window.innerWidth);
      const maxContainer = 1500; // Cap at 1000px to prevent oversized layout on 4K/large displays
      if (window.innerWidth > 400) {
        const size = minDimension * percentageOfScreen;
        setDimension(Math.min(size, maxContainer));
      } else {
        setDimension(minDimension * 1); // If mobile dimensions can be as large as possible
      }
    };
    window.addEventListener('resize', updateSize);
    updateSize(); // Calculate first dimensions
    return () => window.removeEventListener('resize', updateSize);
  }, []);  // Run once to calculate initial dimensions

  return dimension;
}
