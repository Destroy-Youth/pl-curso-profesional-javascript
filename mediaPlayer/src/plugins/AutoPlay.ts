import MediaPlayer from '../MediaPlayer'
import IPlugin from './IPlugin'

class AutoPlay implements IPlugin {
  constructor() {}

  run(player: MediaPlayer) {
    player.mute()
    player.play()
  }
}
export default AutoPlay
