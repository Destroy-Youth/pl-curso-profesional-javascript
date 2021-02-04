import MediaPlayer from '../src/MediaPlayer'

interface IPlugin {
  run(player: MediaPlayer): void
}

export default IPlugin
