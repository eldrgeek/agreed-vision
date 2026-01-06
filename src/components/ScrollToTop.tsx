import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Use scrollTo immediately before browser paint to prevent visible scrolling
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
