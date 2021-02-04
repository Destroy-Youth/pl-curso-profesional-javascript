import MediaPlayer from '../MediaPlayer'

interface IPlugin {
  run(player: MediaPlayer): void
}

export default IPlugin
