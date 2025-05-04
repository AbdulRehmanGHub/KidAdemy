import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-5 z-50 right-5 2xl:bottom-8 2xl:right-8">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scrollbtn cursor-pointer bg-green-400 hover:bg-green-500 text-white px-3 py-2 rounded-md shadow-md 2xl:px-5 md:text-xl font-bold 2xl:py-4 2xl:text-5xl"
        >
          &uarr;
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
