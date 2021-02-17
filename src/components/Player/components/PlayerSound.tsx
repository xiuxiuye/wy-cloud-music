import React, { useContext, useEffect, useState  } from 'react'
import { StoreContext } from '../../../store/provider'

interface PlayerSoundProps {
  audioDOM: any;
}

export default function PlayerSound ({ audioDOM }: PlayerSoundProps) {
  const [volume, setVolume] = useState(0)
  const store = useContext(StoreContext) as any
  const trackStyles = { backgroundColor: store.state.skin.current ? '' : 'rgba(0, 0, 0, 0.65)' }
  const barStyles = { backgroundColor: store.state.skin.current ? store.state.skin.colors.subColor : store.state.skin.colors.balanceColor, width: `${volume *100}%` }
  const ballStyles = { left: `${volume * 100}%` }
  const pointerStyles = { backgroundColor: store.state.skin.current ? store.state.skin.colors.subColor : store.state.skin.colors.balanceColor }

  function setMuted () {
    const value = volume ? 0 : 0.5
    store.dispatch({ type: 'play/setVolume', value })
  }

  useEffect(() => {
    audioDOM.current.volume = store.state.play.volume
    setVolume(store.state.play.volume)
  }, [audioDOM, store.state.play.volume])

  return (
    <div className="wyy-player-sound">
      <span className={`iconfont ${volume ? 'icon-shengyin' : 'icon-jingyin'}`} onClick={() => setMuted()}></span>
      <div className="wyy-player-sound-track" id="wyy-player-sound-track" style={trackStyles} onClick={(e) => setPlayVolume(e, store)}>
        <div className="wyy-player-sound-bar" style={barStyles}></div>
        <div className="wyy-player-sound-ball" style={ballStyles} onMouseDown={() => handleVolumeMouseDown(store)}>
          <div className="wyy-player-sound-ball-pointer" style={pointerStyles}></div>
        </div>
      </div>
    </div>
  )
}

function setPlayVolume (event: any, store: any) {
  const current = event.clientX
  const dom = document.querySelector('#wyy-player-sound-track')
  const min = Math.round((dom as any).getBoundingClientRect().left)
  const max = Math.round((dom as any).getBoundingClientRect().left + (dom as any).clientWidth)
  if (current >= min && current <= max) {
    store.dispatch({ type: 'play/setVolume', value: (current - min) / (max - min) })
  }
}

function handleVolumeMouseDown (store: any) {
  let volume = 0
  function handleVolumeMouseMove (event: any,) {
    const current = event.clientX
    const dom = document.querySelector('#wyy-player-sound-track')
    const min = Math.round((dom as any).getBoundingClientRect().left)
    const max = Math.round((dom as any).getBoundingClientRect().left + (dom as any).clientWidth)
    if (current <= min) {
      volume = 0
    } else if (current >= max) {
      volume = 1
    } else {
      volume = (current - min) / (max - min)
    }
    store.dispatch({ type: 'play/setVolume', value: volume })
  }

  function handleVolumeMouseUp () {
    window.removeEventListener('mousemove', handleVolumeMouseMove)
    window.removeEventListener('mouseup', handleVolumeMouseUp)
  }

  window.addEventListener('mousemove', handleVolumeMouseMove)
  window.addEventListener('mouseup', handleVolumeMouseUp)
}
