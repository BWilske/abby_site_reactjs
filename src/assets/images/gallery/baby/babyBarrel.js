const images = [];

for (let i = 0; i <= 7; i++) {
  images.push({
    image: require(`./baby${i}.jpg`),
    alt: "image in baby gallery",
  });
}

export default images;
