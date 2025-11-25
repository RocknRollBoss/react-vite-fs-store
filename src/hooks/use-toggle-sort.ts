import { useState, useEffect, useRef } from "react";

export const useToggleSort = () => {
  const [togglePopup, setTogglePopup] = useState(false);
  const sortRef = useRef<null | HTMLDivElement>(null);

  const clickOutsideSort = (e: MouseEvent) => {
    if (sortRef.current && !e.composedPath().includes(sortRef.current)) {
      setTogglePopup(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", clickOutsideSort);
    return () => document.body.removeEventListener("click", clickOutsideSort);
  }, []);

  return {
    sortRef,
    togglePopup,
    setTogglePopup,
  };
};
