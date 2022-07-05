import { useContext } from "react";
import GallerySubCard from "../layout/GallerySubCard";
import GalleryContext from "../../context/gallery/GalleryContext";
import { Link } from "react-router-dom";

function GalleryDirectory() {
  let { wedding, baby, senior, family } = useContext(GalleryContext);

  return (
    <>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-12 mt-12  ">
        <Link to="/gallery/wedding">
          <GallerySubCard data={wedding} />
        </Link>

        <Link to="/gallery/senior">
          <GallerySubCard data={senior} />
        </Link>
        <Link to="/gallery/family">
          <GallerySubCard data={family} />
        </Link>
        <Link to="/gallery/baby">
          <GallerySubCard data={baby} />
        </Link>
      </div>
    </>
  );
}

export default GalleryDirectory;
