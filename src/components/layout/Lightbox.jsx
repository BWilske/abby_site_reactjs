import { useContext, useRef } from "react";
import React from "react";
import LightboxContext from "../../context/gallery/LightboxContext";

function Lightbox() {
  const { toggleLightbox, lightboxImage } = useContext(LightboxContext);
  return (
    <div
      className=" w-fit  border-4 border-slate-400 fixed inset-0 m-auto h-fit z-20"
      onClick={() => toggleLightbox()}
    >
      {lightboxImage}{" "}
    </div>
  );
}

export default Lightbox;
