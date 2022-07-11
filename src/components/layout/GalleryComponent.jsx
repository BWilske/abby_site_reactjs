import GalleryCard from "./GalleryCard";
import { v4 as uuidv4 } from "uuid";

function GalleryComponent({ photoData }) {
  let renderCard = (data, id = uuidv4()) => {
    return <GalleryCard data={data} key={id}></GalleryCard>;
  };
  return (
    <div className="w-auto h-auto bg-red-50 flex justify-center z-100 ">
      <div className=" my-8 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {photoData.map((data) => renderCard(data))}
      </div>
    </div>
  );
}

export default GalleryComponent;
