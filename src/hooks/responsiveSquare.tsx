import { useEffect, useState } from 'react';

export function useResponsiveSquare(percentageOfScreen: number) {
  const [dimension, setDimension] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      const minDimension = Math.min(window.innerHeight, window.innerWidth);
      if (window.innerWidth > 400) {
        setDimension(minDimension * percentageOfScreen);  // 80% of the smallest viewport dimension
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
