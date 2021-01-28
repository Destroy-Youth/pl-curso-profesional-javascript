import MediaPlayer from './src/MediaPlayer.js'
import AutoPlay from './src/plugins/AutoPlay.js'
import AutoPause from './src/plugins/AutoPause.js'

const video = document.querySelector('video')
const btnPlay = document.getElementById('btn-play')
const btnMute = document.getElementById('btn-mute')

const player = new MediaPlayer({
  mediaElement: video,
  plugins: [new AutoPlay(), new AutoPause()],
})

btnPlay.onclick = () => {
  player.play()
}

btnMute.onclick = () => {
  player.mute()
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .catch(error => console.log(error.message))
}
