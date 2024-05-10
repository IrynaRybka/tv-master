import { useEffect, RefObject } from "react";

export const useClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  callback: () => void
): void => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
};