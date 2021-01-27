class MediaPlayer {
  constructor({ mediaElement, plugins = [] }) {
    this.media = mediaElement
    this.plugins = plugins

    this.initPlugins()
  }

  initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this)
    })
  }

  play() {
    if (this.media.paused) this.media.play()
  }

  pause() {
    if (!this.media.paused) this.media.pause()
  }

  mute() {
    this.media.muted = !this.media.muted
  }
}

export default MediaPlayer
