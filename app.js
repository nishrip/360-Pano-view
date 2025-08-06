// Get DOM elements
const container = document.getElementById('container');
const loading = document.getElementById('loading');

// Initialize Panolens viewer
const viewer = new PANOLENS.Viewer({
  container: container,
  controlBar: true,
  autoHideInfospot: false,
  output: 'console'
});

// Load a single 360° image
const panorama = new PANOLENS.ImagePanorama('my-panorama.jpg');

// When the panorama starts to fade in, hide the loading message
panorama.addEventListener('enter-fade-start', () => {
  loading.style.display = 'none';
});

// Add the panorama to the viewer
viewer.add(panorama);