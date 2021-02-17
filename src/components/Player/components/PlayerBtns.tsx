import React, { useContext } from 'react'
import { StoreContext } from '../../../store/provider'

interface PlayerBtnsProps {
  audioDOM: any;
  setNextPlay: Function;
}

export default function PlayerBtns ({ audioDOM, setNextPlay }: PlayerBtnsProps) {
  const store = useContext(StoreContext) as any
  const styles = { color: store.state.skin.current ? store.state.skin.colors.subColor : 'white' }
  const playing = store.state.play.playing

  function togglePlayerStatus () {
    if (playing) {
      audioDOM.current.pause()
    } else {
      audioDOM.current.play()
    }
    store.dispatch({
      type: 'play/setPlaying',
      value: !playing
    })
  }

  return (
    <div className="wyy-player-btns" style={styles}>
      <span className="iconfont icon-step-backward" onClick={() => setNextPlay('pre')}></span>
      <span className={playing ? 'iconfont icon-poweroff-circle-fill' : 'iconfont icon-play-circle-fill'} onClick={() => togglePlayerStatus()}></span>
      <span className="iconfont icon-step-forward"  onClick={() => setNextPlay('next')}></span>
    </div>
  )
}
