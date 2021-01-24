import MediaPlayer from './src/MediaPlayer.js'
import AutoPlay from './src/plugins/AutoPlay.js'

const video = document.querySelector('video')
const btnPlay = document.getElementById('btn-play')
const btnMute = document.getElementById('btn-mute')

const player = new MediaPlayer({
  mediaElement: video,
  plugins: [new AutoPlay()],
})

btnPlay.onclick = () => {
  player.play()
}

btnMute.onclick = () => {
  player.mute()
}
