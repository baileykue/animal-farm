
const goatImage = document.getElementById('goat-image');
const goatSound = document.getElementById('goat-sound');
const chickenImage = document.getElementById('chicken-image');
const chickenSound = document.getElementById('chicken-sound');
const cowImage = document.getElementById('cow-image');
const cowSound = document.getElementById('cow-sound');

goatImage.addEventListener('click', ()=>{
  goatSound.play();
}
);

chickenImage.addEventListener('click', ()=>{
  chickenSound.play();
}
);

cowImage.addEventListener('click', ()=>{
  cowSound.play();
}
);

window.addEventListener('keydown', (event)=>{
  if (event.key =="g") {
    goatSound.play();
  }
}
);

window.addEventListener('keydown', (event)=>{
  if (event.key =="c") {
    chickenSound.play();
  }
}
);

window.addEventListener('keydown', (event)=>{
  if (event.key =="m") {
    cowSound.play();
  }
}
);

