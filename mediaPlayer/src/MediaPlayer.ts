import IPlugin from './plugins/IPlugin'

class MediaPlayer {
  media: HTMLMediaElement
  plugins: IPlugin[]
  container: HTMLElement

  constructor({ mediaElement, plugins = [] }) {
    this.media = mediaElement
    this.plugins = plugins

    this.initPlayer()
    this.initPlugins()
  }

  initPlayer() {
    this.container = document.createElement('div')
    this.container.style.position = 'relative'
    this.media.parentNode.insertBefore(this.container, this.media)
    this.container.appendChild(this.media)
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
