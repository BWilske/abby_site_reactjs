import { useContext } from "react";
import GallerySubCard from "../layout/GallerySubCard";
import GalleryContext from "../../context/gallery/GalleryContext";

function GalleryDirectory() {
  let { wedding, baby, senior, family } = useContext(GalleryContext);

  return (
    <>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-12 mt-12">
        <div>
          <GallerySubCard data={wedding} />
        </div>
        <div>
          <GallerySubCard data={senior} />
        </div>
        <div>
          <GallerySubCard data={family} />
        </div>
        <div>
          <GallerySubCard data={baby} />
        </div>
      </div>
    </>
  );
}

export default GalleryDirectory;
