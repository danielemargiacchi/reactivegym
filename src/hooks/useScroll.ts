import { useEffect } from "react";
import { useLocation } from "react-router";

const useScroll = (elementId: string) => {
    const location = useLocation();
      useEffect(() => {
        // check if the fragment is equal to the element id
        if (location.hash === elementId) {
          const element = document.querySelector(location.hash);
          if (element) {
            // scroll to the selected element
            element.scrollIntoView({ behavior: "smooth", block:'start' });
          }
        }
      }, [elementId, location]);
}

export default useScroll;