const images = [];

for (let i = 0; i <= 7; i++) {
  images.push({
    image: require(`./senior${i}.jpg`),
    alt: "image in senior gallery",
  });
}

export default images;
