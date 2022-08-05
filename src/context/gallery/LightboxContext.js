import { createContext, useState, useEffect } from "react";

const LightboxContext = createContext();

export const LightboxProvider = ({ children }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  const setImage = (src, alt) => {
    setLightboxImage(<img src={src} alt={alt} width="800" />);
  };

  useEffect(() => {
    if (lightboxOpen) {
      window.addEventListener("click", () => setLightboxOpen(false), true);

      return () => {
        window.removeEventListener("click", () => setLightboxOpen(false), true);
      };
    }
  }, [lightboxOpen]);

  const toggleLightbox = () =>
    lightboxOpen ? setLightboxOpen(false) : setLightboxOpen(true);

  return (
    <LightboxContext.Provider
      value={{
        lightboxOpen,
        lightboxImage,
        setImage,
        toggleLightbox,
      }}
    >
      {children}
    </LightboxContext.Provider>
  );
};

export default LightboxContext;
