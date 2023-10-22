import { useState } from "react";

const useOnHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseEnterHandler = () => {
    setIsHovered(true);
  };

  const mouseLeaveHandler = () => {
    setIsHovered(false);
  };

  return { isHovered, mouseEnterHandler, mouseLeaveHandler };
};

export default useOnHover;
