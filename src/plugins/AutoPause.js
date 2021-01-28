class AutoPause {
  constructor() {
    this.threshold = 0.25
    this.handleIntersection = this.handleIntersection.bind(this)
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
  }

  run(player) {
    this.player = player

    // Pause when the video is out of view in the same page
    let config = {
      threshold: this.threshold,
    }
    const observer = new IntersectionObserver(this.handleIntersection, config)
    observer.observe(this.player.media)

    // Pause when the user changes tabs
    document.addEventListener('visibilitychange', this.handleVisibilityChange)
  }

  handleIntersection(entries) {
    const entry = entries[0]

    const isVisible = entry.intersectionRatio >= this.threshold
    if (isVisible) this.player.play()
    else this.player.pause()
  }

  handleVisibilityChange() {
    const isVisible = document.visibilityState === 'visible'
    if (isVisible) this.player.play()
    else this.player.pause()
  }
}

export default AutoPause
