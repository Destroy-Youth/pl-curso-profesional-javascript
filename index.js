import MediaPlayer from './src/MediaPlayer.js'

const video = document.querySelector('video')
const button = document.querySelector('button')

const player = new MediaPlayer({ mediaElement: video })

button.onclick = () => {
  player.play()
}
