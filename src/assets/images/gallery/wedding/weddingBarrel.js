const images = [];

for (let i = 0; i <= 60; i++) {
  images.push({
    image: require(`./wedding${i}.jpg`),
    alt: "image in wedding gallery",
  });
}

export default images;
