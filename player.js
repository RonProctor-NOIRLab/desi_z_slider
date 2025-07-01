const slider = document.getElementById('zSlider');
const viewer = document.getElementById('viewer');
const totalSlices = 1000;

const images = [];
for (let i = 0; i < totalSlices; i++) {
  const img = new Image();
  img.src = `frames/frame${String(i).padStart(4, '0')}.jpg`;
  images.push(img);
}

slider.addEventListener('input', () => {
  viewer.src = images[+slider.value].src;
});
