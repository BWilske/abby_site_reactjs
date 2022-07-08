function GallerySubCard({ data }) {
  const { image, title } = data;

  return (
    <div className="m-auto w-96 bg-base-100 shadow-xl rounded-sm ">
      <div className="photo">
        <img src={image} alt={title} className="photo h-64 w-96" />
      </div>

      <div className="card-body">
        <h2 className="card-title m-auto">{title}</h2>
      </div>
    </div>
  );
}
//testing purposes
// GallerySubCard.defaultProps = {
//   data: {
//     image: "https://api.lorem.space/image/shoes?w=400&h=225",
//     title: "weddings",
//   },
// };

export default GallerySubCard;
