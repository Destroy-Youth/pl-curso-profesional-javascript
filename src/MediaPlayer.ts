import IPlugin from './plugins/IPlugin'

class MediaPlayer {
  media: HTMLMediaElement
  plugins: IPlugin[]

  constructor({ mediaElement, plugins = [] }) {
    this.media = mediaElement
    this.plugins = plugins

    this.initPlugins()
  }

  private initPlugins() {
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
