import { useState, useEffect } from "react";

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
// In this implementation:

// The useWindowDimensions custom hook initializes the windowDimensions state variable with an object containing the initial width and height of the window.
// The useEffect hook is used to add an event listener for the resize event on the window. The event listener updates the windowDimensions state with the current width and height of the window whenever the window is resized.
// The effect cleanup function removes the event listener when the component unmounts.
// Finally, the hook returns the windowDimensions object representing the current width and height of the window.
// Example usage of the useWindowDimensions hook:
