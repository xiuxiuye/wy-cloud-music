import React, { useContext } from 'react'
import { StoreContext } from '../../../store/provider'

const playMode = [
  {
    class: 'icon-yinlebofangye-xunhuanbofang',
    title: '循环播放'
  },
  {
    class: 'icon-yinlebofangye-danquxunhuan',
    title: '单曲循环'
  },
  {
    class: 'icon-yinlebofangye-suijibofang',
    title: '随机播放'
  }
]

export default function PlayerMode () {
  const store = useContext(StoreContext) as any
  const playModeClasses = `iconfont ${playMode[store.state.play.mode].class} wyy-player-mode-btn`
  
  return (
    <span className={playModeClasses} title={playMode[store.state.play.mode].title} onClick={() => store.dispatch({
      type: 'play/setMode',
      value: ++store.state.play.mode % 3
    })}></span>
  )
}
