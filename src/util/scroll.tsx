import { useEffect } from "react";

export function scroll() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function useScroll() {
  return useEffect(() => {
    scroll();
  }, []);
}
