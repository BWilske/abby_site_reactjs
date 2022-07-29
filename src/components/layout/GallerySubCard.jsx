function GallerySubCard({ data }) {
  const { image, title } = data;

  return (
    <div className="m-auto w-96 bg-base-100 shadow-xl rounded-sm ">
      <div className="photo">
        <img src={image} alt={title} className="photo " />
      </div>

      <div className="card-body">
        <h2 className="card-title m-auto">{title}</h2>
      </div>
    </div>
  );
}

export default GallerySubCard;
