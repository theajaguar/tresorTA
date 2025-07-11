const imageElement = document.getElementById("illustration");

function changeImage() {
  const index = Math.floor(Math.random() * 57) + 1;
  imageElement.src = `images/${index}.png`;
}

setInterval(changeImage, 30 * 60 * 1000);
changeImage();
