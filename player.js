const slider = document.getElementById('zSlider');
const viewer = document.getElementById('viewer');
const playPause = document.getElementById('playPause');
const totalSlices = 1000;

const images = [];
for (let i = 0; i < totalSlices; i++) {
  const img = new Image();
  img.src = `frames/frame${String(i).padStart(4, '0')}.jpg`;
  images.push(img);
}

let playing = false;
let playInterval = null;

slider.addEventListener('input', () => {
  viewer.src = images[+slider.value].src;
});

playPause.addEventListener('click', () => {
  if (!playing) {
    playing = true;
    playPause.textContent = '⏸️ Pause';
    playInterval = setInterval(() => {
      slider.value = (+slider.value + 1) % totalSlices;
      viewer.src = images[+slider.value].src;
    }, 20); // speed: 20 ms per frame
  } else {
    playing = false;
    playPause.textContent = '▶️ Play';
    clearInterval(playInterval);
  }
});
