class MediaPlayer {
  constructor({ mediaElement, plugins = [] }) {
    this.media = mediaElement
    this.plugins = plugins

    this.initPlugins()
  }

  initPlugins() {
    console.log('init plugins')
    this.plugins.forEach(plugin => {
      console.log('init plugins', plugin)
      plugin.run(this)
    })
  }

  play() {
    if (this.media.paused) this.media.play()
    else this.media.pause()
  }

  mute() {
    if (this.media.muted) {
      this.media.muted = false
    } else {
      this.media.muted = true
    }
  }
}

export default MediaPlayer
