import React, { useContext } from 'react'
import { StoreContext } from '../../../store/provider'
import util from '../../../libs/util'

interface musicInfo {
  id: number;
  title: string;
  duration: number;
  url: any;
  singer: string;
}

interface PlayerListProps {
  opened: Boolean;
}

export default function PlayerList ({ opened }: PlayerListProps) {
  const store = useContext(StoreContext) as any
  function toggleMusic (music: musicInfo) {
    if (music.id !== store.state.play.current.id) {
      store.dispatch({ type: 'play/setCurrent', value: {...music, progress: 0} })
    }
    !store.state.play.playing && store.dispatch({ type: 'play/setPlaying', value: true })
  }
  if (!opened) return (null)
  return (
    <div className={`wyy-player-playlist ${store.state.skin.current ? '' : 'wyy-player-playlist-dark'}`}>{}
      <div className="wyy-player-playlist-header" style={{ backgroundColor: store.state.skin.current ? store.state.skin.colors.siderBGColor : 'rgba(48, 50, 54, 0.65)' }}>
        <span className="active">播放列表</span>
        <span>历史记录</span>
        <span className="iconfont icon-close"></span>
      </div>
      <div className="wyy-player-playlist-sub-header">
        <div>总186首</div>
        <div>
          <span className="iconfont icon-shoucang"></span>
          <span>收藏全部</span>
        </div>
        <div>
          <span className="iconfont icon-template_delete"></span>
          <span>清空</span>
        </div>
      </div>
      <div className={`wyy-player-playlist-content ${store.state.skin.current ? 'dark-scrollbar' : 'scrollbar'}`} style={{ backgroundColor: store.state.skin.current ? store.state.skin.colors.contentBGColor : 'rgba(48, 50, 54, 0.65)' }}>
        {store.state.play.playList.map((el: musicInfo, index: number) => <div
          className={`wyy-player-playlist-content-item ${el.id === store.state.play.current.id ? 'wyy-player-playlist-content-item-active' : ''}`} key={el.id} onDoubleClick={() => toggleMusic(el)}>
          {el.id === store.state.play.current.id ? <span className={`iconfont current-play ${ store.state.play.playing ? 'icon-caret-right' : 'icon-pause' }`} style={{ color: store.state.skin.colors.balanceColor }}></span> : null}
          <div>
            <span className="title">{el.title}</span>
            <span style={{ color: store.state.skin.colors.balanceColor, borderColor: store.state.skin.colors.balanceColor }}>SQ</span>
            <span style={{ color: store.state.skin.colors.balanceColor, borderColor: store.state.skin.colors.balanceColor }}>MV</span>
          </div>
          <span className="singer">{el.singer}</span>
          <span className="time">{util.changeTimeFormat(el.duration)}</span>
        </div>)}
      </div>
    </div>
  )
}
