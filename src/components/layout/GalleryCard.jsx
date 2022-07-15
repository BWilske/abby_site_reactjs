import { useContext } from "react";
import LightboxContext from "../../context/gallery/LightboxContext";

function GalleryCard({ data }) {
  const { photo, alt } = data;
  const { setImage, toggleLightbox } = useContext(LightboxContext);

  //this yanks the target from the event, and sets the lightbox context to the appropriate values
  return (
    <div className=" hover:shadow-2xl hover:bg-blend-darken hover:scale-105 ring-zinc-400 ring-2 ring-opacity-70">
      <img
        src={photo}
        alt={alt}
        onClick={() => {
          setImage(photo, alt);

          toggleLightbox();
        }}
      />
    </div>
  );
}

export default GalleryCard;
