/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

export function useEChartsResize(ref: React.RefObject<any>) {
  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        ref.current.getEchartsInstance().resize();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [ref]);
}
