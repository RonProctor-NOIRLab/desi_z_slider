const slider = document.getElementById('zSlider');
const viewer = document.getElementById('viewer');
const totalSlices = 50;

const images = [];
for (let i = 0; i < totalSlices; i++) {
  const img = new Image();
  img.src = `frames/frame_${String(i).padStart(3, '0')}.jpg`;
  images.push(img);
}

slider.addEventListener('input', () => {
  viewer.src = images[+slider.value].src;
});
