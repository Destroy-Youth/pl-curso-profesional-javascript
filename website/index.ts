import MediaPlayer from '../mediaPlayer/src/MediaPlayer'
import AutoPlay from './mediaPlayer/plugins/AutoPlay'
import AutoPause from './mediaPlayer/plugins/AutoPause'
import AdsPlugin from './mediaPlayer/plugins/Ads'

const video = document.querySelector('video')
const btnPlay: HTMLElement = document.getElementById('btn-play')
const btnMute: HTMLElement = document.getElementById('btn-mute')

const player = new MediaPlayer({
  mediaElement: video,
  plugins: [new AutoPlay(), new AutoPause(), new AdsPlugin()],
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
