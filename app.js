// import functions and grab DOM elements
const horseImage = document.getElementById('horse-image');
const horseSound = document.getElementById('horse-sound');
const dogImage = document.getElementById('dog-image');
const dogSound = document.getElementById('dog-sound');
const catImage = document.getElementById('cat-image');
const catSound = document.getElementById('cat-sound');

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
horseImage.addEventListener('click', ()=>{
  console.log('clicking the horse!');
  horseSound.play();
}
);

dogImage.addEventListener('click', ()=>{
  console.log('clicking the dog!');
  dogSound.play();
}
);

catImage.addEventListener('click', ()=>{
  console.log('clicking the cat!');
  catSound.play();
}
);

window.addEventListener('keydown', (event)=>{
  if (event.key =="h") {
    horseSound.play();
  }
}
);

window.addEventListener('keydown', (event)=>{
  if (event.key =="d") {
    dogSound.play();
  }
}
);

window.addEventListener('keydown', (event)=>{
  if (event.key =="c") {
    catSound.play();
  }
}
);

