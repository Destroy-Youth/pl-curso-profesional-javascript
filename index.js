const video = document.querySelector('video')
const button = document.querySelector('button')

// function MediaPlayer(config) {
//   this.media = config.el
// }

// MediaPlayer.prototype.play = function () {
//   this.media.play()
// }
// const player = new MediaPlayer({ el: video })

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
