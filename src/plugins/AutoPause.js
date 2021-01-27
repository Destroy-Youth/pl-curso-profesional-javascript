class AutoPause {
  constructor() {
    this.threshold = 0.25
    this.intersectionHandler = this.intersectionHandler.bind(this)
  }

  run(player) {
    this.player = player

    let config = {
      threshold: this.threshold,
    }
    const observer = new IntersectionObserver(this.intersectionHandler, config)
    observer.observe(this.player.media)
  }

  intersectionHandler(entries) {
    const entry = entries[0]

    const isVisible = entry.intersectionRatio >= this.threshold
    if (isVisible) this.player.play()
    else this.player.pause()
  }
}

export default AutoPause
