import GalleryCard from "./GalleryCard";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import LightboxContext from "../../context/gallery/LightboxContext";
import Lightbox from "./Lightbox";

function GalleryComponent({ photoData }) {
  const { lightboxOpen } = useContext(LightboxContext);

  let renderCard = (data) => {
    return <GalleryCard data={data} key={uuidv4()}></GalleryCard>;
  };
  return (
    <>
      {lightboxOpen ? <Lightbox /> : null}
      <div className="w-auto h-auto bg-red-50 flex justify-center items-center px-8 z-100 ">
        <div className=" my-8 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {photoData.map((data) => renderCard(data))}
        </div>
      </div>
    </>
  );
}

export default GalleryComponent;
