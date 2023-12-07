const stickers = document.querySelectorAll('.sticker');

stickers.forEach((sticker) => {
  sticker.addEventListener('dragstart', function(e) {
    e.dataTransfer.setData('text/plain', sticker.src);
  });
});

document.addEventListener('dragover', function(e) {
  e.preventDefault();
});

document.addEventListener('drop', function(e) {
  e.preventDefault();
  const x = e.clientX;
  const y = e.clientY;

  const src = e.dataTransfer.getData('text/plain');

  const newSticker = document.createElement('img');
  newSticker.src = src;
  newSticker.classList.add('sticker');
  newSticker.style.position = 'absolute';
  newSticker.style.left = `${x}px`;
  newSticker.style.top = `${y}px`;
  newSticker.setAttribute('draggable', true);

  document.body.appendChild(newSticker);
});

// An array to store the filenames of background images
const backgrounds = [
  'assets/backgrounds/background1.jpg',
  'assets/backgrounds/background2.jpg',
  'assets/backgrounds/background3.jpg',
  'assets/backgrounds/background4.jpg',
  'assets/backgrounds/background5.jpg',

  // Add more image filenames as needed
];

// Function to get a random index within the backgrounds array
function getRandomBackgroundIndex() {
  return Math.floor(Math.random() * backgrounds.length);
}

// Function to change the background to a random image
function changeRandomBackground() {
  const randomIndex = getRandomBackgroundIndex();
  const randomBackground = backgrounds[randomIndex];
  document.body.style.backgroundImage = `url('${randomBackground}')`;
}

// Event listener to change background on click
document.body.addEventListener('click', changeRandomBackground);
