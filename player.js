const slider = document.getElementById('zSlider');
const viewer = document.getElementById('viewer');
const playPause = document.getElementById('playPause');
const totalSlices = 1000;

const images = [];
for (let i = 0; i < totalSlices; i++) {
  const img = new Image();
  img.src = `frames/frame_${String(i).padStart(3, '0')}.jpg`;
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
    }, 100); // speed: 100 ms per frame
  } else {
    playing = false;
    playPause.textContent = '▶️ Play';
    clearInterval(playInterval);
  }
});
