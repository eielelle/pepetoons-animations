import { useEffect } from "react";

// Custom hook definition
export default function useAnimateScroll(parentHeight, top, limit, callback) {
  useEffect(() => {
    const linear = 100 - ((top + parentHeight / 2) / (parentHeight / 2)) * 100;
    const val = Math.min(Math.max(linear, 0), limit);

    callback(val);
  }, [top]); // Dependencies: value1, value2, callback
}
