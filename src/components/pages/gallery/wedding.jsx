import React from "react";
import GalleryComponent from "../../layout/GalleryComponent";
import family from "../../../assets/images/gallerydir/family15.jpg";

function Wedding() {
  let testData = [
    {
      photo: family,
      alt: "item",
    },
    {
      photo: "https://api.lorem.space/image/shoes?w=400&h=225",
      alt: "item",
    },
    {
      photo: "https://api.lorem.space/image/shoes?w=400&h=225",
      alt: "item",
    },
    {
      photo: "https://api.lorem.space/image/shoes?w=400&h=225",
      alt: "item",
    },
    {
      photo: "https://api.lorem.space/image/shoes?w=400&h=225",
      alt: "item",
    },
    {
      photo: "https://api.lorem.space/image/shoes?w=400&h=225",
      alt: "item",
    },
    {
      photo: "https://api.lorem.space/image/shoes?w=400&h=225",
      alt: "item",
    },
    {
      photo: "https://api.lorem.space/image/shoes?w=400&h=225",
      alt: "item",
    },
    {
      photo: "https://api.lorem.space/image/shoes?w=400&h=225",
      alt: "item",
    },
    {
      photo: "https://api.lorem.space/image/shoes?w=400&h=225",
      alt: "item",
    },
    {
      photo: "https://api.lorem.space/image/shoes?w=400&h=225",
      alt: "item",
    },
    {
      photo: "https://api.lorem.space/image/shoes?w=400&h=225",
      alt: "item",
    },
    {
      photo: "https://api.lorem.space/image/shoes?w=400&h=225",
      alt: "item",
    },
    {
      photo: "https://api.lorem.space/image/shoes?w=400&h=225",
      alt: "item",
    },
    {
      photo: "https://api.lorem.space/image/shoes?w=400&h=225",
      alt: "item",
    },
    {
      photo: "https://api.lorem.space/image/shoes?w=400&h=225",
      alt: "item",
    },
  ];
  return <GalleryComponent photoData={testData}></GalleryComponent>;
}

export default Wedding;
