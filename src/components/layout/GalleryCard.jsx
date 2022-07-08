function GalleryCard({ data }, key) {
  const { photo, alt } = data;
  return (
    <div className=" hover:shadow-2xl hover:bg-blend-darken hover:scale-105 border-2 border-gray-300">
      <img src={photo} alt={alt} />
    </div>
  );
}

export default GalleryCard;
