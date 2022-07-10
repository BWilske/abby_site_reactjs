function GalleryCard({ data }, key) {
  const { photo, alt } = data;
  return (
    <div className=" hover:shadow-2xl hover:bg-blend-darken hover:scale-105 ring-zinc-400 ring-2 ring-opacity-70">
      <img src={photo} alt={alt} />
    </div>
  );
}

export default GalleryCard;
