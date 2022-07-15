import { createContext, useState } from "react";

const LightboxContext = createContext();

export const LightboxProvider = ({ children }) => {
  const [lightboxOpen, setLightboxOpen] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  const setImage = (src, alt) => {
    setLightboxImage(<img src={src} alt={alt} width="800" />);
  };
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
