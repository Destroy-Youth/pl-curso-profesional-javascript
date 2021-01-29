import MediaPlayer from './src/MediaPlayer'
import AutoPlay from './src/plugins/AutoPlay'
import AutoPause from './src/plugins/AutoPause'

const video = document.querySelector('video')
const btnPlay: HTMLElement = document.getElementById('btn-play')
const btnMute: HTMLElement = document.getElementById('btn-mute')

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
