import { useEffect, useState } from "react";

function useDebounce(value: () => Promise<void>, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState<() => Promise<void>>(value);
  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] 
  );
  return debouncedValue;
}

export default useDebounce