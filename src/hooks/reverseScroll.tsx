import { useEffect, useRef } from "react";

const useReverseScroll = (elementId: string) => {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    elementRef.current = document.getElementById(elementId);

    if (elementRef.current) {
      const reverseScroll = (e: WheelEvent) => {
        e.preventDefault();
        elementRef.current!.scrollBy(-e.deltaX, 0);
      };

      elementRef.current.addEventListener("wheel", reverseScroll);

      return () => {
        if (elementRef.current) {
          elementRef.current.removeEventListener("wheel", reverseScroll);
        }
      };
    }
  }, [elementId]);

  return elementRef;
};

export default useReverseScroll;
