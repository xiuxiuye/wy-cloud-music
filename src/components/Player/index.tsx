import React, { useRef, useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../store/provider'
import PlayerBtns from './components/PlayerBtns'
import PlayerProgress from './components/PlayerProgress'
import PLayerSound from './components/PlayerSound'
import PlayerMode from './components/PlayerMode'
import PlayerList from './components/PlayerList'
import './index.scss'

export default function Player () {
  const audioRef = useRef(null)
  const sourceRef = useRef(null)
  const store = useContext(StoreContext) as any
  const [playListOpened, setPlayListOpened] = useState(false)

  function setNextPlay (type: string) {
    const list = store.state.play.playList
    let  index = list.findIndex((el: any) => el.id === store.state.play.current.id)
    if (list.length === 1) {
      index = 0
    }else if (store.state.play.mode === 2) {
      let temp = Math.floor(Math.random() * list.length + 0)
      while (temp === index) {
        temp = Math.floor(Math.random() * list.length + 0)
      }
      index = temp
    } else if (type === 'pre') {
      index = index === 0 ? list.length - 1 : index - 1
    } else {
      index = index === list.length - 1 ? 0 : index + 1
    }
    store.dispatch({
      type: 'play/setCurrent',
      value: Object.assign({ progress: 0 }, list[index])
    })
  }
  useEffect(() => {
    (audioRef as any).current.src = store.state.play.current.url
    store.state.play.playing && (audioRef as any).current.play()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store.state.play.current])

  return (
    <div className="wyy-player-wrapper"
      tabIndex={0}
      style={{
        backgroundColor: store.state.skin.current ? '' : store.state.skin.colors.siderBGColor,
        color: store.state.skin.current ? '' : 'white',
        boxShadow: store.state.skin.current ? '' : '0 0 4px 0 rgba(255, 255, 255, 0.3)'
      }}
      onBlur={() => setPlayListOpened(false)}>
      <audio style={{ display: 'none' }} ref={audioRef} controls preload="auto" loop={store.state.play.mode === 1}>
        <source ref={sourceRef} type="audio/mpeg" />
        您的浏览器不支持 audio 元素。
      </audio>
      <PlayerBtns audioDOM={audioRef} setNextPlay={setNextPlay} />
      <PlayerProgress audioDOM={audioRef} setNextPlay={setNextPlay} />
      <PLayerSound audioDOM={audioRef} />
      <PlayerMode />
      <PlayerList opened={playListOpened} />
      <span className="iconfont icon-wj-bflb wyy-player-playlist-btn" onClick={() => setPlayListOpened(pre => !pre)}></span>
    </div>
  )
}
