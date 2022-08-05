import GallerySubCard from "../layout/GallerySubCard";
import { Link } from "react-router-dom";
import baby from "../../assets/images/misc/gallerydir/baby.jpg";
import family from "../../assets/images/misc/gallerydir/family.jpg";
import wedding from "../../assets/images/misc/gallerydir/wedding.jpg";
import senior from "../../assets/images/misc/gallerydir/senior.jpg";

function GalleryDirectory() {
  const photos = {
    baby: {
      image: baby,
      title: "baby",
    },
    senior: {
      image: senior,
      title: "senior",
    },
    wedding: {
      image: wedding,
      title: "wedding",
    },
    family: {
      image: family,
      title: "family",
    },
  };
  return (
    <>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-12 mt-12 mb-8 mx-auto ">
        <Link to="/gallery/wedding">
          <GallerySubCard data={photos.wedding} />
        </Link>

        <Link to="/gallery/senior">
          <GallerySubCard data={photos.senior} />
        </Link>
        <Link to="/gallery/family">
          <GallerySubCard data={photos.family} />
        </Link>
        <Link to="/gallery/baby">
          <GallerySubCard data={photos.baby} />
        </Link>
      </div>
    </>
  );
}

export default GalleryDirectory;
