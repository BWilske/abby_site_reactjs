import { useContext, useRef } from "react";
import React from "react";
import LightboxContext from "../../context/gallery/LightboxContext";

function Lightbox() {
  const { toggleLightbox, lightboxImage } = useContext(LightboxContext);
  return (
    <div
      className="ring-4 ring-slate-400 bg-primary fixed inset-0 m-auto h-fit lg:w-1/2  md:w-3/4 w-11/12 "
      onClick={() => toggleLightbox()}
    >
      {lightboxImage}{" "}
    </div>
  );
}

export default Lightbox;
