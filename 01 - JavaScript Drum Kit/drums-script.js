function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (!audio) return 0
  audio.currentTime = 0 // Rewind to the start of the audio (so it won't miss a play if the audio is already running)
  audio.play()
  key.classList.toggle('playing')
}

function removeTransition(e) {
   if (e.propertyName !== 'transform') return 0 // skip it if it's not a transform
   this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)