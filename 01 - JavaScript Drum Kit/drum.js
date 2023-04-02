
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if(!audio) return; //stop the function from running
  audio.currentTime = 0 // rewind it to the start to be able to play it everytime we hit a key
  audio.play()
  key.classList.add('playing')
}

function removeTransition(e) {
  if(e.propertyName !== 'transform') return; //skip it if it's not a transform
  // this is equal to the key div
  this.classList.remove('playing')
}

// we need to remove the css class from the key
const keys = document.querySelectorAll('.key');
//transitionend is linked to the transition in css
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound)
