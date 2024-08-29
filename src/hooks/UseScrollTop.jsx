import { useCallback, useEffect } from "react";

const scrollToTop = (smooth = true) => {
  window.scrollTo({
    top: 0,
    behavior: smooth ? "smooth" : "auto",
  });
};

const useScrollToTop = () => {
  const scrollToTopFunc = useCallback((smooth = true) => {
    scrollToTop(smooth);
  }, []);

  useEffect(() => {
    scrollToTopFunc();
  }, []);
};

export default useScrollToTop;
