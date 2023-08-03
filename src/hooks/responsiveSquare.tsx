import { useEffect, useState } from 'react';

export function useResponsiveSquare(percentageOfScreen: number) {
  const [dimension, setDimension] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      const minDimension = Math.min(window.innerHeight, window.innerWidth);
      setDimension(minDimension * percentageOfScreen);  // 80% of the smallest viewport dimension
    };
    window.addEventListener('resize', updateSize);
    updateSize(); // initiate the size
    return () => window.removeEventListener('resize', updateSize);
  }, []);  // Empty array ensures that effect is only run on mount and unmount

  return dimension ;
}
