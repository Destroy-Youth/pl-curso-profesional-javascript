class MediaPlayer {
  constructor({ mediaElement }) {
    this.media = mediaElement
  }

  play() {
    if (this.media.paused) this.media.play()
    else this.media.pause()
  }
}

export default MediaPlayer
