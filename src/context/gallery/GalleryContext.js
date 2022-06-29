import { createContext, useState } from "react";
import family from "../../assets/images/gallerydir/family15.jpg";

const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const photoDirectories = {
    wedding: {
      image: family,
      title: "Wedding",
      link: "/wedding",
    },

    senior: {
      image: "https://api.lorem.space/image/shoes?w=400&h=225",
      title: "senior",
      link: "/senior",
    },

    baby: {
      image: "https://api.lorem.space/image/shoes?w=400&h=225",
      title: "baby",
      link: "/baby",
    },

    family: {
      image: "https://api.lorem.space/image/shoes?w=400&h=225",
      title: "family",
      link: "/family",
    },
  };
  return (
    <GalleryContext.Provider value={photoDirectories}>
      {children}
    </GalleryContext.Provider>
  );
};

export default GalleryContext;
