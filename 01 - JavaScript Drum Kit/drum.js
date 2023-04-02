window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  if(!audio) return; //stop the function from running
  audio.currentTime = 0 // rewind it to the start to be able to play it everytime we hit a key
  audio.play();
})
