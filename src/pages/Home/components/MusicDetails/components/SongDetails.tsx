import React, { useContext } from 'react'
import { StoreContext } from '../../../../../store/provider'
import lyric from './assets/lyric'

export default function SongDetails() {
  const store = useContext(StoreContext) as any

  return (
    <div className="wyy-music-song-details">
      <div className="wyy-music-song-details-content">
        <div className="wyy-music-song-cover" style={{ animationPlayState: store.state.play.playing ? 'running' : 'paused' }}>
          <img src={store.state.play.current.cover} alt="" />
        </div>
        <div className="wyy-music-song-actions">
          <div className="wyy-music-song-action">
            <span className="iconfont icon-heart"></span>
          </div>
          <div className="wyy-music-song-action">
            <span className="iconfont icon-Addadocument"></span>
          </div>
          <div className="wyy-music-song-action">
            <span className="iconfont icon-1_download"></span>
          </div>
          <div className="wyy-music-song-action">
            <span className="iconfont icon-share"></span>
          </div>
        </div>
      </div>
      <div className="wyy-music-song-details-content">
        <div className="wyy-music-song-title">
          {store.state.play.current.title}
          <label style={{ color: store.state.skin.colors.balanceColor, borderColor: store.state.skin.colors.balanceColor }}>标准音质</label>
        </div>
        <div className="wyy-music-song-label">网易云音乐独家专属推荐</div>
        <div className="wyy-music-song-subtitle">
          <label>专辑：<span style={{ color: store.state.skin.colors.balanceColor }}>{store.state.play.current.title}</span></label>
          <label>歌手：<span style={{ color: store.state.skin.colors.balanceColor }}>{store.state.play.current.singer}</span></label>
          <label>来源：<span style={{ color: store.state.skin.colors.balanceColor }}>我最爱的歌单</span></label>
        </div>
        <div className={`wyy-music-song-lyric ${store.state.skin.current ? 'scrollbar' : 'dark-scrollbar'}`}>
          {lyric.map((el, index) => <p key={index}>{el}</p>)}
        </div>
      </div>
    </div>
  )
}
