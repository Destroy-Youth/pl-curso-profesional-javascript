const video = document.querySelector('video')
const button = document.querySelector('button')

class MediaPlayer {
  constructor({ mediaElement }) {
    this.media = mediaElement
  }

  play() {
    if (this.media.paused) this.media.play()
    else this.media.pause()
  }
}

const player = new MediaPlayer({ mediaElement: video })

button.onclick = () => {
  player.play()
}
