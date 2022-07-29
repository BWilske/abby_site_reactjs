import GallerySubCard from "../layout/GallerySubCard";
import { Link } from "react-router-dom";

function GalleryDirectory() {
  const photoDirectories = {
    wedding: {
      image: "https://api.lorem.space/image/shoes?w=400&h=225",
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
    <>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-12 mt-12 mb-8 mx-auto ">
        <Link to="/gallery/wedding">
          <GallerySubCard data={photoDirectories.wedding} />
        </Link>

        <Link to="/gallery/senior">
          <GallerySubCard data={photoDirectories.senior} />
        </Link>
        <Link to="/gallery/family">
          <GallerySubCard data={photoDirectories.family} />
        </Link>
        <Link to="/gallery/baby">
          <GallerySubCard data={photoDirectories.baby} />
        </Link>
      </div>
    </>
  );
}

export default GalleryDirectory;
