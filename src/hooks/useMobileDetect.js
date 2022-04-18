import { useEffect, useState } from "react";

const useMobileDetect = () => {
  const [device, setDevice] = useState({
    type: "desktop",
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 768) {
        setDevice((old) => ({ ...old, type: "mobile" }));
      } else {
        setDevice((old) => ({ ...old, type: "desktop" }));
      }
    });

    window.addEventListener("load", () => {
      if (window.innerWidth <= 768) {
        setDevice((old) => ({ ...old, type: "mobile" }));
      } else {
        setDevice((old) => ({ ...old, type: "desktop" }));
      }
    });
  }, []);

  return device;
};

export default useMobileDetect;
