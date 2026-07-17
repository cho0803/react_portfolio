import { useEffect } from "react";

export default ( pageHeight : number = window.innerHeight ) => {

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const currentScroll = window.scrollY;
      if (e.deltaY > 0) {
        const nextTarget = Math.floor((currentScroll + pageHeight) / pageHeight) * pageHeight;
        window.scrollTo({ top: nextTarget, behavior: "smooth" });
      } else {
        const prevTarget = Math.ceil((currentScroll - pageHeight) / pageHeight) * pageHeight;
        window.scrollTo({ top: Math.max(0, prevTarget), behavior: "smooth" });
      }
    };
    
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);
};